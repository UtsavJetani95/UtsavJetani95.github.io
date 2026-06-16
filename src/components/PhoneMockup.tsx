'use client';

import React, { useState, useEffect } from 'react';
import { 
  Tv, Timer, Wallet, Compass, Sparkles, 
  Wifi, Battery, Play, Pause, ChevronLeft, 
  Send, RefreshCw, Volume2, Power, Home,
  ArrowUpRight
} from 'lucide-react';

interface PhoneMockupProps {
  type: 'remote' | 'productivity' | 'expense' | 'utility' | 'chat';
  data: any;
}

export default function PhoneMockup({ type, data }: PhoneMockupProps) {
  const [time, setTime] = useState('20:18');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const minStr = minutes < 10 ? `0${minutes}` : minutes;
      setTime(`${hours}:${minStr}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-[280px] h-[560px] md:w-[300px] md:h-[600px] rounded-[48px] border-[10px] border-zinc-950 bg-zinc-950 shadow-2xl overflow-hidden ring-4 ring-zinc-800/20">
      {/* Dynamic Island / Camera Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-zinc-950 z-30 flex items-center justify-end px-3">
        <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800/40"></div>
      </div>
      
      {/* Top Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-10 px-6 flex items-center justify-between z-20 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 select-none">
        <span>{time}</span>
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="w-full h-full pt-10 pb-4 bg-zinc-900 text-zinc-100 flex flex-col justify-between select-none overflow-hidden relative">
        {/* Subtle screen reflection shine */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10"></div>
        
        {type === 'remote' && <RemoteScreen data={data} />}
        {type === 'productivity' && <ProductivityScreen data={data} />}
        {type === 'expense' && <ExpenseScreen data={data} />}
        {type === 'utility' && <UtilityScreen data={data} />}
        {type === 'chat' && <ChatScreen data={data} />}
      </div>
    </div>
  );
}

// 1. Android TV Remote Interface Simulator
function RemoteScreen({ data }: { data: any }) {
  const [volume, setVolume] = useState(15);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-between p-4 pt-2">
      {/* Connection Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-semibold tracking-wide text-zinc-300">{data.tvName || 'Living Room TV'}</span>
        </div>
        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {data.status || 'Connected'}
        </span>
      </div>

      {/* Trackpad Area */}
      <div className="flex-1 my-4 rounded-3xl border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-950/60 active:bg-zinc-950/80 transition-colors duration-200 flex flex-col items-center justify-center relative cursor-all-scroll group">
        <div className="text-zinc-600 text-xs font-medium uppercase tracking-widest group-hover:scale-105 transition-transform">Touchpad</div>
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-zinc-800"></div>
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-800"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-zinc-800"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-zinc-800"></div>
      </div>

      {/* Controller Buttons Grid */}
      <div className="grid grid-cols-3 gap-3">
        <button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-800/40 hover:bg-zinc-800/60 active:scale-95 transition-all text-red-500 border border-red-950/20">
          <Power className="w-5 h-5" />
        </button>
        <button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-800/40 hover:bg-zinc-800/60 active:scale-95 transition-all text-zinc-300 border border-zinc-800/25">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-800/40 hover:bg-zinc-800/60 active:scale-95 transition-all text-zinc-300 border border-zinc-800/25">
          <Home className="w-5 h-5" />
        </button>

        {/* Volume controls */}
        <div className="col-span-3 flex items-center justify-between px-3 py-2 rounded-2xl bg-zinc-800/20 border border-zinc-800/20 text-xs">
          <button 
            onClick={() => setIsMuted(!isMuted)} 
            className={`p-1.5 rounded-lg active:scale-90 transition-transform ${isMuted ? 'text-red-400 bg-red-500/10' : 'text-zinc-400'}`}
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <div className="flex-1 mx-3 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-150" 
              style={{ width: `${isMuted ? 0 : (volume / 30) * 100}%` }}
            ></div>
          </div>
          <div className="flex gap-2.5">
            <button 
              onClick={() => setVolume(Math.max(0, volume - 1))}
              className="w-6 h-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center font-bold active:scale-90 transition-all text-zinc-300"
            >
              -
            </button>
            <button 
              onClick={() => setVolume(Math.min(30, volume + 1))}
              className="w-6 h-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center font-bold active:scale-90 transition-all text-zinc-300"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. FocusFlow Productivity Screen Simulator
function ProductivityScreen({ data }: { data: any }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-between p-5 pt-3">
      {/* Category header */}
      <div className="text-center">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent/80">{data.phase}</span>
        <h3 className="text-sm font-semibold text-zinc-400 mt-0.5">{data.sound}</h3>
      </div>

      {/* Countdown Ring */}
      <div className="flex-1 flex items-center justify-center my-4">
        <div className="relative w-36 h-36 rounded-full border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center bg-zinc-950/10">
          <div className="absolute inset-1.5 rounded-full border border-accent/20 flex flex-col items-center justify-center">
            <span className="text-3xl font-light tracking-tight text-white font-mono">{data.timer}</span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 mt-0.5">Minutes</span>
          </div>
          {/* Animated glow */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-10 pointer-events-none"></div>
          )}
        </div>
      </div>

      {/* Sound Options & Controls */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-2">
          {['Rain', 'Cafe', 'Nature', 'Mute'].map((s) => (
            <span 
              key={s} 
              className={`text-[9px] px-2.5 py-1 rounded-full border font-medium cursor-pointer transition-all ${
                s === 'Rain' 
                  ? 'bg-accent/10 border-accent/30 text-accent' 
                  : 'bg-zinc-800/30 border-zinc-800/40 text-zinc-400'
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all ${
            isPlaying ? 'bg-zinc-800 text-white' : 'bg-accent text-white'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>
      </div>
    </div>
  );
}

// 3. SpendWise Expense Tracker Simulator
function ExpenseScreen({ data }: { data: any }) {
  return (
    <div className="flex-1 flex flex-col justify-between p-4 pt-2">
      {/* Wallet balance */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-zinc-850 to-zinc-900 border border-zinc-800 shadow-md">
        <span className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase">Available Balance</span>
        <div className="text-xl font-bold text-white tracking-tight mt-0.5">{data.balance}</div>
        <div className="flex justify-between items-center mt-3 text-[9px] text-zinc-500">
          <span>Card ending *4958</span>
          <span className="text-emerald-400 font-semibold">+4.2% this week</span>
        </div>
      </div>

      {/* Transaction Feed */}
      <div className="flex-1 my-3 overflow-hidden">
        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 px-1">Recent Expenses</div>
        <div className="flex flex-col gap-2">
          {data.expenses.map((exp: any, i: number) => (
            <div key={i} className="flex justify-between items-center p-2.5 rounded-xl bg-zinc-950/30 border border-zinc-800/30">
              <div>
                <div className="text-xs font-semibold text-zinc-300">{exp.desc}</div>
                <div className="text-[9px] text-zinc-500 mt-0.5">{exp.category}</div>
              </div>
              <span className="text-xs font-bold text-red-400">{exp.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <button className="w-full py-2.5 rounded-xl bg-accent text-white text-xs font-bold tracking-wide shadow-md hover:bg-accent/90 active:scale-98 transition-all flex items-center justify-center gap-1.5">
        <span>Add Expense</span>
      </button>
    </div>
  );
}

// 4. SmartTools Utility Spirit Level Simulator
function UtilityScreen({ data }: { data: any }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Simulate bubble movements slightly on mouse move over the screen
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div 
      className="flex-1 flex flex-col justify-between p-4 pt-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-center">
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">{data.heading}</span>
        <div className="flex justify-center gap-3 mt-1.5 font-mono text-xs">
          <span>X: <span className="text-accent">{(pos.x / 4).toFixed(1)}°</span></span>
          <span>Y: <span className="text-accent">{(pos.y / 4).toFixed(1)}°</span></span>
        </div>
      </div>

      {/* Spirit Level Tube */}
      <div className="w-full h-12 rounded-full border border-zinc-800 bg-zinc-950/60 relative flex items-center justify-center overflow-hidden my-4">
        {/* Center alignment lines */}
        <div className="absolute top-0 bottom-0 left-[calc(50%-15px)] right-[calc(50%-15px)] border-l border-r border-zinc-800/40 pointer-events-none"></div>
        {/* Animated Spirit bubble */}
        <div 
          className="w-8 h-8 rounded-full bg-radial from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20 transition-all duration-100 ease-out flex items-center justify-center text-[8px] font-bold text-emerald-950"
          style={{
            transform: `translate(${pos.x}px, 0px)`
          }}
        >
          {Math.abs(pos.x) < 2 ? 'OK' : ''}
        </div>
      </div>

      {/* Visual Level Ring */}
      <div className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-950/40 mx-auto relative flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border border-accent/20 absolute"></div>
        <div 
          className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400 shadow-md transition-all duration-100 ease-out"
          style={{
            transform: `translate(${pos.x / 1.5}px, ${pos.y / 1.5}px)`
          }}
        ></div>
      </div>

      <div className="text-center text-[9px] text-zinc-500 italic mt-2">
        Hover to calibrate sensor readings
      </div>
    </div>
  );
}

// 5. AIAssistant Chat Simulator
function ChatScreen({ data }: { data: any }) {
  const [messages, setMessages] = useState<any[]>(data.messages || []);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate quick AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { role: 'assistant', text: 'Here is a premium Tailwind config for your project...' }
      ]);
    }, 800);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-3.5 pt-2">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-bold text-zinc-200">Gemini Assistant</span>
        </div>
        <RefreshCw 
          className="w-3.5 h-3.5 text-zinc-500 cursor-pointer active:rotate-180 transition-transform duration-300"
          onClick={() => setMessages(data.messages)}
        />
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[380px] pr-1.5 scrollbar-none">
        {messages.map((msg: any, i: number) => (
          <div 
            key={i} 
            className={`max-w-[85%] rounded-2xl p-2.5 text-[10.5px] leading-relaxed animate-fade-in ${
              msg.role === 'user' 
                ? 'ml-auto bg-accent text-white rounded-tr-none' 
                : 'mr-auto bg-zinc-850 text-zinc-200 border border-zinc-800/40 rounded-tl-none'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <form onSubmit={handleSend} className="flex gap-1.5 mt-2.5">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..." 
          className="flex-1 px-3 py-2 text-[10.5px] rounded-xl bg-zinc-950/60 border border-zinc-800 focus:outline-none focus:border-accent text-zinc-100 placeholder-zinc-500"
        />
        <button 
          type="submit" 
          className="p-2 rounded-xl bg-accent text-white hover:bg-accent/90 active:scale-95 transition-all"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
