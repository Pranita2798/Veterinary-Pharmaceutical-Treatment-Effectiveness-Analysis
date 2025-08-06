import React from 'react';
import { Activity, Stethoscope } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Stethoscope className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">VetPharm Analytics</h1>
              <p className="text-sm text-gray-500">Treatment Effectiveness Analysis</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full">
              <Activity className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">System Active</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};