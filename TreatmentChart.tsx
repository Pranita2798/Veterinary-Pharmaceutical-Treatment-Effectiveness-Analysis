import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../ui/Card';

interface TreatmentChartProps {
  data: Array<{
    drugName: string;
    successRate: number;
    totalUses: number;
  }>;
}

export const TreatmentChart: React.FC<TreatmentChartProps> = ({ data }) => {
  const maxSuccessRate = Math.max(...data.map(d => d.successRate));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Treatment Success Rates by Drug</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((drug, index) => (
            <div key={drug.drugName} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{drug.drugName}</span>
                <div className="text-right">
                  <span className="text-sm font-semibold text-gray-900">
                    {drug.successRate.toFixed(1)}%
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    ({drug.totalUses} uses)
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${(drug.successRate / maxSuccessRate) * 100}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};