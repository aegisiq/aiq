import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import ROIInput from './ROIInput';
import ROIResults from './ROIResults';
import TrialModal from '../../Trial/TrialModal';

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    totalEmployees: 50,
    monthlyCustomers: 1000,
    retentionRate: 75,
    adminStaffPercent: 20,
    adminHourlyWage: 25,
    revenuePerCustomer: 100
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateResults = () => {
    // Calculate number of admin staff
    const adminStaff = Math.round(inputs.totalEmployees * (inputs.adminStaffPercent / 100));
    
    // Calculate monthly admin hours (assuming 160 hours per month per admin staff)
    const monthlyAdminHours = adminStaff * 160;
    
    // Estimate hours saved (30% efficiency improvement)
    const hoursSaved = monthlyAdminHours * 0.3;
    
    // Calculate labor cost savings
    const monthlyCostSavings = hoursSaved * inputs.adminHourlyWage;
    
    // Calculate retention improvement (assume 5% increase)
    const newRetentionRate = Math.min(100, inputs.retentionRate + 5);
    
    // Calculate revenue impact from improved retention
    const additionalCustomers = inputs.monthlyCustomers * 
      ((newRetentionRate - inputs.retentionRate) / 100);
    const revenueIncrease = additionalCustomers * inputs.revenuePerCustomer;
    
    // Calculate total monthly benefit
    const monthlyBenefit = monthlyCostSavings + revenueIncrease;
    
    // Calculate annual ROI
    const annualBenefit = monthlyBenefit * 12;
    const implementationCost = 10000; // Example fixed cost
    const roi = ((annualBenefit - implementationCost) / implementationCost) * 100;

    return {
      annualROIAmount: annualBenefit - implementationCost,
      annualROIPercent: roi,
      monthlyHoursSaved: hoursSaved,
      retentionIncrease: newRetentionRate - inputs.retentionRate,
      monthlyCostReduction: monthlyCostSavings,
      monthlyRevenueIncrease: revenueIncrease
    };
  };

  const results = calculateResults();

  return (
    <div className="p-6 rounded-xl bg-gradient-card border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-semibold text-white">ROI Calculator</h3>
      </div>

      <div className="space-y-4 mb-8">
        <ROIInput
          label="Total Number of Employees"
          value={inputs.totalEmployees}
          onChange={(value) => setInputs(prev => ({ ...prev, totalEmployees: value }))}
        />
        <ROIInput
          label="Average Customers per Month"
          value={inputs.monthlyCustomers}
          onChange={(value) => setInputs(prev => ({ ...prev, monthlyCustomers: value }))}
        />
        <ROIInput
          label="Current Customer Retention Rate"
          value={inputs.retentionRate}
          onChange={(value) => setInputs(prev => ({ ...prev, retentionRate: value }))}
          suffix="%"
        />
        <ROIInput
          label="Percentage of Administrative Staff"
          value={inputs.adminStaffPercent}
          onChange={(value) => setInputs(prev => ({ ...prev, adminStaffPercent: value }))}
          suffix="%"
        />
        <ROIInput
          label="Average Admin Staff Hourly Wage"
          value={inputs.adminHourlyWage}
          onChange={(value) => setInputs(prev => ({ ...prev, adminHourlyWage: value }))}
          prefix="$"
        />
        <ROIInput
          label="Average Revenue per Customer"
          value={inputs.revenuePerCustomer}
          onChange={(value) => setInputs(prev => ({ ...prev, revenuePerCustomer: value }))}
          prefix="$"
        />
      </div>

      <ROIResults results={results} />

      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 mt-8"
      >
        Lock It In NOW
      </button>

      <TrialModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}