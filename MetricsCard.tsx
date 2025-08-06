import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  format?: 'number' | 'percentage' | 'currency' | 'days';
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  trend,
  format = 'number'
}) => {
  const formatValue = (val: string | number) => {
    const numVal = typeof val === 'string' ? parseFloat(val) : val;
    
    switch (format) {
      case 'percentage':
        return `${numVal.toFixed(1)}%`;
      case 'currency':
        return `$${numVal.toFixed(2)}`;
      case 'days':
        return `${numVal.toFixed(1)} days`;
      default:
        return typeof val === 'number' ? val.toLocaleString() : val;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{formatValue(value)}</p>
            {trend && (
              <p className={`text-sm mt-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </p>
            )}
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};