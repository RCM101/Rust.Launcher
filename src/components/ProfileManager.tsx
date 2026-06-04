import React, { useState } from 'react';
import { Plus, Trash2, Copy, Check } from 'lucide-react';

export default function ProfileManager() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Max FPS', quality: 'Low', resolution: '1280x720' },
    { id: 2, name: 'Balanced', quality: 'High', resolution: '1920x1080' },
    { id: 3, name: 'Ultra', quality: 'Ultra', resolution: '2560x1440' },
  ]);
  const [selected, setSelected] = useState(1);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Game Profiles</h2>
        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-primary rounded-lg font-semibold text-white glow-primary">
          <Plus className="w-5 h-5" />
          New Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => setSelected(profile.id)}
            className={`glass rounded-xl p-6 cursor-pointer transition ${
              selected === profile.id ? 'ring-2 ring-primary glow-primary' : 'hover:bg-white/10'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{profile.name}</h3>
              </div>
              {selected === profile.id && <Check className="w-5 h-5 text-accent" />}
            </div>
            <div className="space-y-2 text-sm mb-4">
              <p className="text-gray-400">Quality: <span className="text-white">{profile.quality}</span></p>
              <p className="text-gray-400">Resolution: <span className="text-white">{profile.resolution}</span></p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded text-xs">
                <Copy className="w-3 h-3 inline" /> Duplicate
              </button>
              <button className="flex-1 py-2 bg-red-500/20 hover:bg-red-500/30 rounded text-xs text-red-400">
                <Trash2 className="w-3 h-3 inline" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
