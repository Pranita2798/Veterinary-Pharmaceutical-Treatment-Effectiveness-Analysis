import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../ui/Card';
import { Treatment } from '../../types';
import { CheckCircle, AlertCircle, Clock, XCircle } from 'lucide-react';

interface RecentTreatmentsProps {
  treatments: Treatment[];
}

export const RecentTreatments: React.FC<RecentTreatmentsProps> = ({ treatments }) => {
  const getStatusIcon = (outcome: Treatment['outcome']) => {
    switch (outcome) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'partial':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'failure':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'ongoing':
        return <Clock className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (outcome: Treatment['outcome']) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (outcome) {
      case 'success':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'partial':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'failure':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'ongoing':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      default:
        return baseClasses;
    }
  };

  const recentTreatments = treatments
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Treatments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTreatments.map((treatment) => (
            <div key={treatment.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                {getStatusIcon(treatment.outcome)}
                <div>
                  <p className="font-medium text-gray-900">{treatment.drugName}</p>
                  <p className="text-sm text-gray-500">{treatment.dosage}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={getStatusBadge(treatment.outcome)}>
                  {treatment.outcome}
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(treatment.startDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};