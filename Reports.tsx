import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Download, FileText, Calendar } from 'lucide-react';

export const Reports: React.FC = () => {
  const reportTypes = [
    {
      title: 'Monthly Treatment Summary',
      description: 'Comprehensive overview of all treatments performed this month',
      icon: FileText,
      lastGenerated: '2024-01-15'
    },
    {
      title: 'Drug Effectiveness Report',
      description: 'Detailed analysis of pharmaceutical effectiveness across treatments',
      icon: Calendar,
      lastGenerated: '2024-01-10'
    },
    {
      title: 'Cost Analysis Report',
      description: 'Financial breakdown of treatment costs and cost-effectiveness metrics',
      icon: Download,
      lastGenerated: '2024-01-08'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg px-6 py-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Reports & Analytics</h2>
        <p className="text-purple-100">
          Generate comprehensive reports for treatment analysis and regulatory compliance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTypes.map((report, index) => {
          const Icon = report.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{report.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Last: {report.lastGenerated}
                      </span>
                      <button className="px-3 py-1 bg-purple-600 text-white text-xs rounded-md hover:bg-purple-700 transition-colors">
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Scheduled Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Weekly Summary Report</h4>
                <p className="text-sm text-gray-600">Automatically generated every Monday</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Configure</button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Monthly Analytics Report</h4>
                <p className="text-sm text-gray-600">Sent to clinic administrators monthly</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Configure</button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};