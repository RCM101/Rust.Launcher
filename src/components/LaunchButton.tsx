import React, { useState } from 'react';
import { Play, Zap } from 'lucide-react';

export default function LaunchButton() {
  const [isLaunching, setIsLaunching] = useState(false);

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl glass p-12">
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Play?</h2>
          <p className="text-gray-400 mb-8 text-lg">Launch Rust with optimized settings for maximum FPS</p>
          <button
            onClick={() => setIsLaunching(!isLaunching)}
            className={`group px-12 py-4 rounded-xl font-bold text-lg transition-all ${
              isLaunching ? 'bg-gray-600' : 'bg-gradient-primary text-white hover:shadow-2xl glow-primary'
            }`}
          >
            <div className="flex items-center justify-center gap-3">
              <Play className="w-6 h-6 fill-current" />
              <span>{isLaunching ? 'Launching...' : 'LAUNCH RUST'}</span>
              <Zap className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['FPS Boost', 'Balanced', 'Ultra'].map((preset) => (
          <button key={preset} className="glass p-6 rounded-xl hover:bg-white/10 text-left">
            <h3 className="font-bold text-white">{preset}</h3>
            <div className="mt-4 h-1 bg-gray-700 rounded-full" />
          </button>
        ))}
      </div>

      <div className="glass rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Launch Options</h3>
        <div className="space-y-3">
          {['✓ Disabled Discord', '✓ Optimized Memory', '✓ Enhanced Shader', '✓ Anti-Cheat'].map((opt) => (
            <div key={opt} className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-accent" />
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
