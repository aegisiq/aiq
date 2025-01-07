import React from 'react';
import { DollarSign, Clock, TrendingUp, Users, Percent } from 'lucide-react';

interface ROIResultsProps {
  results: {
    annualROIAmount: number;
    annualROIPercent: number;
    monthlyHoursSaved: number;
    retentionIncrease: number;
    monthlyCostReduction: number;
    monthlyRevenueIncrease: number;
  };
}

export default function ROIResults({ results }: ROIResultsProps) {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(Math.round(value));

  const formatPercent = (value: number) =>
    `${Math.round(value * 10) / 10}%`;

  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-1">
          <DollarSign className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-medium text-gray-400">Annual ROI</h4>
        </div>
        <p className="text-xl font-semibold text-white">
          {formatCurrency(results.annualROIAmount)} ({formatPercent(results.annualROIPercent)})
        </p>
      </div>

      <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-1">
          <Clock className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-medium text-gray-400">Monthly Hours Saved</h4>
        </div>
        <p className="text-xl font-semibold text-white">
          {Math.round(results.monthlyHoursSaved)} hours
        </p>
      </div>

      <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-1">
          <Users className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-medium text-gray-400">Retention Increase</h4>
        </div>
        <p className="text-xl font-semibold text-white">
          {formatPercent(results.retentionIncrease)}
        </p>
      </div>

      <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-1">
          <Percent className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-medium text-gray-400">Monthly Cost Reduction</h4>
        </div>
        <p className="text-xl font-semibold text-white">
          {formatCurrency(results.monthlyCostReduction)}
        </p>
      </div>

      <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-1">
          <TrendingUp className="w-4 h-4 text-purple-400" />
          <h4 className="text-sm font-medium text-gray-400">Monthly Revenue Increase</h4>
        </div>
        <p className="text-xl font-semibold text-white">
          {formatCurrency(results.monthlyRevenueIncrease)}
        </p>
      </div>
    </div>
  );
}