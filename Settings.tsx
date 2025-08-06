import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Settings as SettingsIcon, Bell, Database, Shield, Users } from 'lucide-react';

export const Settings: React.FC = () => {
  const settingSections = [
    {
      title: 'General Settings',
      icon: SettingsIcon,
      items: [
        { label: 'Default Currency', value: 'USD', type: 'select' },
        { label: 'Date Format', value: 'MM/DD/YYYY', type: 'select' },
        { label: 'Time Zone', value: 'EST', type: 'select' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Alerts', value: true, type: 'toggle' },
        { label: 'Treatment Reminders', value: true, type: 'toggle' },
        { label: 'Report Generation', value: false, type: 'toggle' }
      ]
    },
    {
      title: 'Data Management',
      icon: Database,
      items: [
        { label: 'Auto Backup', value: true, type: 'toggle' },
        { label: 'Data Retention (months)', value: '24', type: 'input' },
        { label: 'Export Format', value: 'CSV', type: 'select' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        { label: 'Two-Factor Authentication', value: false, type: 'toggle' },
        { label: 'Session Timeout (minutes)', value: '30', type: 'input' },
        { label: 'Password Requirements', value: 'Strong', type: 'select' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg px-6 py-8 text-white">
        <h2 className="text-2xl font-bold mb-2">System Settings</h2>
        <p className="text-gray-100">
          Configure your veterinary pharmaceutical analysis system preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-gray-600" />
                  <CardTitle>{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700">
                        {item.label}
                      </label>
                      <div>
                        {item.type === 'toggle' ? (
                          <button
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              item.value ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                item.value ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        ) : item.type === 'select' ? (
                          <select className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>{item.value}</option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            value={item.value}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-20"
                            readOnly
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-600" />
            <CardTitle>User Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Admin Access</h4>
                <p className="text-sm text-gray-600">Full system access and configuration</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Active</span>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Veterinarian Access</h4>
                <p className="text-sm text-gray-600">Treatment data entry and analysis</p>
              </div>
              <button className="px-4 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">
                Configure
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};