import React, { useState } from 'react';
import { Settings, Shield, Zap } from 'lucide-react';

export default function SettingsPanel() {
  const [settings, setSettings] = useState({
    discord: true,
    antiCheat: true,
    resolution: '1920x1080',
    quality: 'High',
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Settings className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold text-white">Settings</h2>
      </div>

      <div className="space-y-4">
        <div className="glass rounded-xl p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Disable Discord Overlay</h3>
            <button
              onClick={() => setSettings({ ...settings, discord: !settings.discord })}
              className={`w-12 h-7 rounded-full transition ${settings.discord ? 'bg-accent' : 'bg-gray-600'}`}
            />
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <label className="block text-white font-semibold mb-3">Graphics Quality</label>
          <select className="w-full px-4 py-2 bg-darker border border-gray-600 rounded-lg text-white">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Ultra</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-8 py-3 bg-gradient-primary rounded-lg font-semibold text-white glow-primary">
          Save Changes
        </button>
        <button className="px-8 py-3 bg-gray-700 rounded-lg font-semibold text-white">
          Reset
        </button>
      </div>
    </div>
  );
}
