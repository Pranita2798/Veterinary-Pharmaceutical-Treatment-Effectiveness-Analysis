import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { useAnalytics } from '../hooks/useAnalytics';
import { sampleTreatments } from '../data/sampleData';

export const Analytics: React.FC = () => {
  const analytics = useAnalytics(sampleTreatments);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg px-6 py-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Advanced Analytics</h2>
        <p className="text-green-100">
          Deep dive into treatment effectiveness patterns and pharmaceutical performance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Drug Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.drugStats.map((drug) => (
                <div key={drug.drugName} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{drug.drugName}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Success Rate:</span>
                      <span className="ml-2 font-medium">{drug.successRate.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Uses:</span>
                      <span className="ml-2 font-medium">{drug.totalUses}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Avg Recovery:</span>
                      <span className="ml-2 font-medium">{drug.averageRecoveryTime.toFixed(1)} days</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Avg Cost:</span>
                      <span className="ml-2 font-medium">${drug.averageCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Treatment Outcomes Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Success Rate Distribution</h4>
                <div className="space-y-2">
                  {['Success', 'Partial', 'Failure'].map((outcome) => {
                    const count = sampleTreatments.filter(t => 
                      t.outcome === outcome.toLowerCase()
                    ).length;
                    const percentage = sampleTreatments.length > 0 
                      ? (count / sampleTreatments.filter(t => t.outcome !== 'ongoing').length) * 100 
                      : 0;
                    
                    return (
                      <div key={outcome} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{outcome}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                outcome === 'Success' ? 'bg-green-500' :
                                outcome === 'Partial' ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">
                            {percentage.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Cost Analysis</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Treatment Cost:</span>
                    <span className="font-medium">${analytics.totalCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average per Treatment:</span>
                    <span className="font-medium">
                      ${(analytics.totalCost / sampleTreatments.length).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Effectiveness:</span>
                    <span className="font-medium">
                      ${(analytics.totalCost / (analytics.successRate / 100 * sampleTreatments.length)).toFixed(2)}/success
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};