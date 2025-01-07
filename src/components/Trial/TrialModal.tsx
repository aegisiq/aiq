import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendTrialSignupNotification } from '../../utils/emailService';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await sendTrialSignupNotification(formData);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Failed to process trial signup:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 touch-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#030014] border border-purple-500/20 rounded-xl p-6 overflow-y-auto max-h-[90vh] touch-auto"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white transition-colors min-w-touch min-h-touch flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Start Your 14-Day Free Trial
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-black/30 border border-purple-500/20 rounded-lg px-4 py-3 min-h-touch text-white focus:outline-none focus:border-purple-500/40 transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/30 border border-purple-500/20 rounded-lg px-4 py-3 min-h-touch text-white focus:outline-none focus:border-purple-500/40 transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/30 border border-purple-500/20 rounded-lg px-4 py-3 min-h-touch text-white focus:outline-none focus:border-purple-500/40 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 min-h-touch bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                  >
                    {isSubmitting ? 'Processing...' : 'Begin Trial'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Welcome Aboard!
                </h3>
                <p className="text-gray-400">
                  We'll be in contact soon to set you up!
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}