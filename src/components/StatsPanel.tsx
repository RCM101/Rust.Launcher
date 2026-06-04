import React, { useState, useEffect } from 'react';
import { TrendingUp, Cpu, Zap, HardDrive } from 'lucide-react';

export default function StatsPanel() {
  const [fps, setFps] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.random() * 240);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white">Performance Monitor</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'FPS', value: Math.round(fps), unit: 'fps', icon: <TrendingUp /> },
          { label: 'CPU', value: 45, unit: '%', icon: <Cpu /> },
          { label: 'GPU', value: 78, unit: '%', icon: <Zap /> },
          { label: 'RAM', value: 6200, unit: 'MB', icon: <HardDrive /> },
        ].map((stat) => (
          <div key={stat.label} className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">{stat.icon}</div>
              <div>
                <p className="text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value} {stat.unit}</p>
              </div>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-primary" style={{ width: `${(stat.value / 100) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
