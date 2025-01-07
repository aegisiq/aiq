import React from 'react';

interface ROIInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
}

export default function ROIInput({ label, value, onChange, prefix, suffix }: ROIInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full bg-black/30 border border-purple-500/20 rounded-lg py-2 text-white
            ${prefix ? 'pl-8' : 'pl-4'} ${suffix ? 'pr-12' : 'pr-4'}
            focus:outline-none focus:border-purple-500/40 transition-colors duration-300`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}