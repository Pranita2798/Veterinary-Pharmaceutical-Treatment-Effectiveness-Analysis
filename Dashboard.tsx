import React from 'react';
import { MetricsCard } from '../components/dashboard/MetricsCard';
import { TreatmentChart } from '../components/dashboard/TreatmentChart';
import { RecentTreatments } from '../components/dashboard/RecentTreatments';
import { useAnalytics } from '../hooks/useAnalytics';
import { sampleTreatments } from '../data/sampleData';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  AlertTriangle,
  Target,
  Activity
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const analytics = useAnalytics(sampleTreatments);

  const metricsData = [
    {
      title: 'Total Treatments',
      value: analytics.totalTreatments,
      icon: Activity,
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Success Rate',
      value: analytics.successRate,
      icon: Target,
      format: 'percentage' as const,
      trend: { value: 5.2, isPositive: true }
    },
    {
      title: 'Avg Recovery Time',
      value: analytics.averageRecoveryTime,
      icon: Clock,
      format: 'days' as const,
      trend: { value: 2.1, isPositive: false }
    },
    {
      title: 'Total Cost',
      value: analytics.totalCost,
      icon: DollarSign,
      format: 'currency' as const,
      trend: { value: 8.7, isPositive: false }
    },
    {
      title: 'Side Effect Rate',
      value: analytics.sideEffectRate,
      icon: AlertTriangle,
      format: 'percentage' as const,
      trend: { value: 1.5, isPositive: false }
    },
    {
      title: 'Most Effective Drug',
      value: analytics.mostEffectiveDrug,
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg px-6 py-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Treatment Effectiveness Dashboard</h2>
        <p className="text-blue-100">
          Monitor and analyze pharmaceutical treatment outcomes across your veterinary practice
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricsData.map((metric, index) => (
          <MetricsCard
            key={index}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            format={metric.format}
            trend={metric.trend}
          />
        ))}
      </div>

      {/* Charts and Recent Treatments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TreatmentChart data={analytics.drugStats} />
        <RecentTreatments treatments={sampleTreatments} />
      </div>
    </div>
  );
};