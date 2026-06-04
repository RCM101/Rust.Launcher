import React, { useState } from 'react';
import { Gamepad2, Settings, Zap, BarChart3 } from 'lucide-react';
import LaunchButton from './components/LaunchButton';
import StatsPanel from './components/StatsPanel';
import SettingsPanel from './components/SettingsPanel';
import ProfileManager from './components/ProfileManager';

type Tab = 'launch' | 'stats' | 'settings' | 'profiles';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('launch');

  return (
    <div className="w-full h-screen bg-gradient-dark overflow-hidden">
      <header className="bg-darker border-b border-primary/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Rust Launcher Pro</h1>
              <p className="text-xs text-gray-400">Performance Enhanced Edition</p>
            </div>
          </div>
          <div className="text-right text-xs text-gray-500">
            Status: <span className="text-accent font-semibold">Ready</span>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100%-80px)]">
        <aside className="w-48 bg-secondary border-r border-primary/10 p-4">
          <nav className="space-y-2">
            {[
              { id: 'launch' as Tab, label: 'Launch', icon: Gamepad2 },
              { id: 'stats' as Tab, label: 'Performance', icon: BarChart3 },
              { id: 'profiles' as Tab, label: 'Profiles', icon: Zap },
              { id: 'settings' as Tab, label: 'Settings', icon: Settings },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-gradient-primary text-white glow-primary'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="mt-8 p-4 glass rounded-xl">
            <p className="text-xs text-gray-400 mb-2">Game ID</p>
            <p className="text-lg font-bold text-primary">252490</p>
            <p className="text-xs text-gray-400 mt-2">Rust</p>
          </div>
        </aside>

        <main className="flex-1 overflow-auto">
          <div className="p-8 animate-fade-in">
            {activeTab === 'launch' && <LaunchButton />}
            {activeTab === 'stats' && <StatsPanel />}
            {activeTab === 'profiles' && <ProfileManager />}
            {activeTab === 'settings' && <SettingsPanel />}
          </div>
        </main>
      </div>
    </div>
  );
}
