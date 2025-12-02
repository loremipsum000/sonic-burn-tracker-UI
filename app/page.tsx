'use client';

import React, { useState, useEffect } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  ArrowUpRight, 
  Github, 
  Twitter, 
  MessageCircle, 
  Send, 
  Globe, 
  Menu, 
  X,
  ExternalLink,
  Fuel
} from 'lucide-react';

// --- Assets ---

const SonicLogo = ({ className = "h-8 w-auto" }) => (
  <svg 
    className={className} 
    viewBox="0 0 203 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M97.0099 30.9235C95.7996 30.3377 94.2538 30.0409 92.4189 30.0409H87.1982C85.8072 30.0409 84.695 29.6538 83.9001 28.908L83.8614 28.8693C83.0846 28.0512 82.7104 27.1299 82.7104 26.0538C82.7104 24.9776 83.0975 23.9841 83.8614 23.1789C84.6304 22.3608 85.6859 21.9479 86.9866 21.9479H99.8332V19.1582H86.5092C85.0614 19.1582 83.8175 19.4937 82.7053 20.1776C81.593 20.8279 80.7517 21.6666 80.1375 22.735C79.5233 23.806 79.2188 24.9389 79.2188 26.2086C79.2188 27.6977 79.5362 28.9596 80.1684 29.9661C80.8471 30.9906 81.7478 31.7571 82.9169 32.3171C84.1324 32.8332 85.575 33.0965 87.1982 33.0965H92.6899C93.6138 33.0965 94.437 33.3081 95.1338 33.7287C95.8461 34.1081 96.3751 34.65 96.7261 35.3391C97.0693 35.9842 97.2293 36.6397 97.2293 37.4088C97.2293 38.1778 97.0409 38.9494 96.6667 39.6514C96.2925 40.3611 95.717 40.952 94.9661 41.4166C94.2615 41.8346 93.3996 42.0411 92.4241 42.0411H80.0626V44.8256H93.0125C94.5635 44.8256 95.8719 44.4772 97.0151 43.7624C98.2048 43.0398 99.0977 42.1392 99.7506 40.9908C100.411 39.8114 100.726 38.5881 100.726 37.2462C100.726 35.6875 100.396 34.3532 99.7558 33.2952C99.1545 32.2526 98.2538 31.4706 97.0125 30.9184L97.0048 30.9235H97.0099Z" fill="currentColor"/>
    <path d="M127.685 20.3312C125.68 19.1312 123.326 18.5195 120.694 18.5195C118.062 18.5195 115.713 19.1312 113.695 20.3363C111.682 21.5028 110.067 23.1338 108.89 25.1828C107.713 27.188 107.117 29.4823 107.117 31.9958C107.117 34.5094 107.713 36.8295 108.89 38.8656C110.067 40.876 111.685 42.5069 113.695 43.7121C115.615 44.8347 117.861 45.4257 120.359 45.4721H120.694C123.326 45.4773 125.675 44.8915 127.685 43.7199C129.737 42.5147 131.352 40.8837 132.498 38.8811C133.675 36.8372 134.271 34.5249 134.271 32.0062C134.271 29.4874 133.675 27.1338 132.498 25.1287C131.352 23.1235 129.737 21.5131 127.685 20.3415V20.3337V20.3312ZM130.72 32.0036C130.72 33.9881 130.299 35.8127 129.466 37.4307C128.632 39.023 127.456 40.3056 125.974 41.2527C124.498 42.1947 122.668 42.6902 120.689 42.6902C118.71 42.6902 116.937 42.2076 115.404 41.2527C113.922 40.3056 112.746 39.0179 111.904 37.4256C111.076 35.8152 110.65 33.9907 110.65 32.0062C110.65 30.0216 111.071 28.2177 111.904 26.6383C112.738 25.0074 113.922 23.699 115.411 22.7518C116.937 21.797 118.717 21.3221 120.689 21.3221C122.661 21.3221 124.472 21.8047 125.974 22.7596C127.463 23.7144 128.64 25.0151 129.474 26.6332C130.302 28.2177 130.728 30.0216 130.728 32.0087H130.72V32.0036Z" fill="currentColor"/>
    <path d="M160.168 19.9757C158.395 19.0157 156.307 18.5254 153.951 18.5254C151.595 18.5254 149.533 19.0157 147.721 19.9886C145.904 20.9228 144.513 22.2132 143.471 23.9138C142.475 25.6016 141.969 27.6068 141.969 29.8752V44.838H145.463V29.9268C145.463 28.1746 145.858 26.6339 146.635 25.3564C147.437 24.0558 148.498 23.0442 149.786 22.3396C151.091 21.6506 152.49 21.3022 153.951 21.3022C155.411 21.3022 156.797 21.6506 158.064 22.3396C159.378 23.0364 160.439 24.048 161.221 25.3616C162.028 26.6365 162.436 28.1642 162.436 29.9165V44.8277H165.936V29.8649C165.936 27.6042 165.412 25.5913 164.382 23.9035C163.373 22.1951 161.995 20.9125 160.17 19.9654L160.165 19.9732L160.168 19.9757Z" fill="currentColor"/>
    <path d="M178.671 19.1562H175.125V44.8314H178.671V19.1562Z" fill="currentColor"/>
    <path d="M194.868 23.3189C196.426 22.4105 198.192 21.946 200.127 21.946H202.78V19.1562H200.29C197.619 19.1562 195.198 19.7369 193.115 20.8776C191.033 22.0131 189.363 23.577 188.148 25.5176C186.945 27.4118 186.336 29.5899 186.336 31.9951C186.336 34.4003 186.945 36.5887 188.148 38.5242C189.358 40.4314 191.033 41.972 193.115 43.1127C194.94 44.1037 198.512 44.834 200.109 44.834H202.78V42.0443H200.127C198.199 42.0443 196.426 41.6004 194.862 40.723C193.348 39.8146 192.114 38.5836 191.201 37.0687C190.328 35.5487 189.882 33.8403 189.882 31.99C189.882 30.1396 190.328 28.426 191.208 26.906C192.114 25.3989 193.35 24.186 194.87 23.3163V23.324L194.868 23.3189Z" fill="currentColor"/>
    <path d="M38.3855 39.7609C26.3346 43.3894 16.366 48.6824 10.1243 54.8837L9.84888 55.1599C11.509 56.7341 13.3288 58.1431 15.2952 59.3406L15.7173 58.8218C17.4212 56.7341 19.2487 54.7186 21.1508 52.8192C26.2574 47.7172 32.1001 43.3016 38.3907 39.7558L38.383 39.7609H38.3855Z" fill="currentColor"/>
    <path d="M0 34.385C0.481316 40.8548 2.8776 46.7878 6.63804 51.6136L6.81049 51.4407C10.6739 47.6187 15.7033 44.1451 21.7699 41.118C27.0875 38.4625 33.1928 36.1837 39.7742 34.385H0Z" fill="currentColor"/>
    <path d="M24.526 7.79365C35.308 18.5654 48.8775 25.6881 63.7623 28.3901C61.9683 12.4208 48.4116 0 31.9388 0C27.5889 0 23.4424 0.869689 19.6562 2.43874C21.1928 4.29425 22.8349 6.10073 24.526 7.79623V7.79365Z" fill="currentColor"/>
    <path d="M10.1259 9.11253C16.3675 15.3216 26.3362 20.6069 38.3871 24.2431C32.0965 20.692 26.2538 16.2817 21.1472 11.1797C19.2503 9.28544 17.4254 7.26993 15.7138 5.177L15.2916 4.65828C13.3252 5.85571 11.5055 7.26218 9.85303 8.8364L10.1284 9.11253H10.1259Z" fill="currentColor"/>
    <path d="M24.758 56.2038C23.0593 57.8993 21.4197 59.7058 19.8882 61.5613C23.6693 63.1303 27.8209 64 32.1708 64C48.6437 64 62.2003 51.5766 63.9995 35.6022C49.1173 38.3042 35.5477 45.4268 24.7632 56.1986L24.758 56.2038Z" fill="currentColor"/>
    <path d="M21.7741 22.8788C15.7074 19.8517 10.6781 16.3755 6.81466 12.5561L6.64221 12.3832C2.88177 17.2091 0.485472 23.142 0.00415564 29.6118H39.7707C33.1918 27.8131 27.0917 25.5343 21.7663 22.8711L21.7715 22.8788H21.7741Z" fill="currentColor"/>
  </svg>
);

const SonicSymbol = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200.002" height="200" rx="100" fill="#141416"/>
    <path d="M117.857 121.228C84.784 131.15 57.4252 145.623 40.2996 162.58L39.5435 163.333C44.0975 167.638 49.091 171.488 54.4889 174.76L55.6494 173.343C60.3264 167.638 65.3375 162.125 70.5596 156.928C84.573 142.98 100.609 130.905 117.875 121.21L117.857 121.228Z" fill="#F5F5F5"/>
    <path d="M12.5012 106.528C13.8199 124.22 20.3959 140.443 30.717 153.638L31.1917 153.165C41.7941 142.718 55.5966 133.215 72.2475 124.938C86.8412 117.675 103.598 111.445 121.655 106.528H12.5012Z" fill="#F5F5F5"/>
    <path d="M79.8081 33.815C109.4 63.2675 146.64 82.745 187.485 90.13C182.562 46.4675 145.357 12.5 100.151 12.5C88.2126 12.5 76.8366 14.88 66.4452 19.1675C70.665 24.2425 75.1662 29.1775 79.8081 33.815Z" fill="#F5F5F5"/>
    <path d="M40.2996 37.4201C57.4252 54.3951 84.784 68.8501 117.857 78.7901C100.591 69.0776 84.5554 57.0201 70.542 43.0726C65.3375 37.8926 60.3264 32.3801 55.6318 26.6576L54.4713 25.2401C49.0734 28.5126 44.0799 32.3626 39.5435 36.6676L40.2996 37.4201Z" fill="#F5F5F5"/>
    <path d="M79.8081 166.185C75.1486 170.822 70.6475 175.758 66.4452 180.833C76.819 185.12 88.2126 187.5 100.151 187.5C145.357 187.5 182.562 153.533 187.503 109.852C146.658 117.237 109.417 136.715 79.8257 166.168L79.8081 166.185Z" fill="#F5F5F5"/>
    <path d="M72.2475 75.0625C55.5966 66.785 41.7941 57.2825 31.1917 46.835L30.717 46.3625C20.3959 59.5575 13.8199 75.78 12.5012 93.4725H121.638C103.58 88.555 86.8412 82.325 72.2299 75.045L72.2475 75.0625Z" fill="#F5F5F5"/>
  </svg>
);

// --- Mock Data Generators ---

const generateChartData = (points = 20, trend = 'up', timeframe = '7D') => {
  const now = new Date();
  
  return Array.from({ length: points }, (_, i) => {
    let dateLabel = '';
    const date = new Date(now);

    switch(timeframe) {
      case '1h':
        // Every 3 minutes for 20 points = 60 mins
        date.setMinutes(now.getMinutes() - (points - i) * 3);
        dateLabel = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        break;
      case '1D':
        // Every hour approx
        date.setHours(now.getHours() - (points - i));
        dateLabel = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        break;
      case '7D':
        // Every 8-9 hours or simply spread over 7 days. 
        // For 20 points over 7 days -> 1 point every 8.4 hours
        date.setHours(now.getHours() - (points - i) * 8);
        dateLabel = date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        break;
      case '30D':
        // Every 1.5 days
        date.setDate(now.getDate() - (points - i) * 1.5);
        dateLabel = date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        break;
      default:
        dateLabel = `${i}`;
    }

    return {
      name: dateLabel,
      value: trend === 'up' 
        ? 100 + i * 5 + Math.random() * 20 
        : 200 - i * 5 + Math.random() * 20,
    };
  });
};

const TRANSACTIONS = [
  { id: 1, date: '12 / 11 / 2025', time: '14:30', hash: '0x2aa0...B285', amount: '10,000.000 S' },
  { id: 2, date: '12 / 11 / 2025', time: '14:28', hash: '0x3bb1...C396', amount: '15,500.000 S' },
  { id: 3, date: '12 / 11 / 2025', time: '14:15', hash: '0x4cc2...D407', amount: '5,000.000 S' },
  { id: 4, date: '12 / 11 / 2025', time: '13:55', hash: '0x5dd3...E518', amount: '10,000.000 S' },
  { id: 5, date: '12 / 11 / 2025', time: '13:40', hash: '0x6ee4...F629', amount: '22,000.000 S' },
];

const TIME_FRAMES = ['1h', '1D', '7D', '30D'];

// --- Components ---

// 1. Number Rollup Animation Component
const AnimatedNumber = ({ value, duration = 1000, prefix = '', suffix = '' }: { value: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4); 
      
      const current = Math.floor(ease * value);
      setDisplayValue(current);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

// 2. Custom Gauge/Speedometer Component
const Speedometer = ({ value, max, label, subLabel, colorStart, colorEnd, suffix = '' }: { value: number, max: number, label: string, subLabel: string, colorStart: string, colorEnd: string, suffix?: string }) => {
  const radius = 80;
  const stroke = 12;
  const normalizedValue = Math.min(value, max);
  const circumference = radius * 2 * Math.PI;
  
  const percent = normalizedValue / max;
  const offset = circumference * (1 - percent / 2); 

  return (
    <div className="flex flex-col items-center justify-center relative p-4">
      <div className="relative w-48 h-24 overflow-hidden mb-2">
        <svg 
          className="w-48 h-48 transform -rotate-180 transition-all duration-1000 ease-out"
          viewBox="0 0 200 200"
        >
          <defs>
            <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colorStart} />
              <stop offset="100%" stopColor={colorEnd} />
            </linearGradient>
          </defs>
          
          {/* Background Track */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="transparent"
            stroke="#262626"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference / 2}
            strokeLinecap="round"
          />
          
          {/* Progress Arc */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="transparent"
            stroke={`url(#grad-${label})`}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
      </div>

      <div className="text-center -mt-6 z-10">
        <h3 className="text-3xl font-bold text-white tracking-tighter">
           {value}{suffix}
        </h3>
        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{subLabel}</p>
      </div>

      {/* Label above */}
      <div className="absolute top-0 uppercase text-xs font-medium text-gray-400 tracking-widest">
        {label}
      </div>
    </div>
  );
};

// 3. Main Application
export default function SonicBurnTracker() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('7D');
  const [currency, setCurrency] = useState('S');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState(generateChartData(20, 'up', '7D'));

  // Update mock data when timeframe changes
  useEffect(() => {
    setData(generateChartData(20, selectedTimeFrame === '1h' ? 'down' : 'up', selectedTimeFrame));
  }, [selectedTimeFrame]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FE9A4C] selection:text-black overflow-x-hidden">
      
      {/* --- Ambient Background Glows --- */}
      {/* Updated colors to match palette: #FE9A4C (Highlight) and #214E81 (Blue) */}
      <div className="fixed top-[-20%] left-[20%] w-[60%] h-[500px] bg-[#FE9A4C]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[400px] bg-[#214E81]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* --- Header --- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SonicLogo className="h-8 w-auto text-white" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-4 bg-[#111] border border-white/5 rounded-full px-4 py-1.5 text-xs font-medium text-gray-400">
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <SonicSymbol className="w-3 h-3" />
                 </div>
                 <span>Price: <span className="text-white">$0.12</span></span>
               </div>
               <div className="w-px h-3 bg-white/10" />
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                    <Fuel size={10} />
                 </div>
                 <span>Gas: <span className="text-[#FE9A4C]">55 Gwei</span></span>
               </div>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111] border-b border-white/10 p-4 space-y-4">
          <div className="flex justify-between text-sm text-gray-400">
             <span>Price: <span className="text-white">$0.12</span></span>
             <span>Gas: <span className="text-[#FE9A4C]">55 Gwei</span></span>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* --- Hero --- */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
            Burn Tracker
          </h1>
          <p className="text-gray-500 text-lg">Real-time tracking of the Sonic supply mechanics.</p>
        </div>

        {/* --- Top Dashboard Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Main Chart Card */}
          <div className="lg:col-span-2 bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-2 h-2 rounded-full bg-[#FE9A4C] animate-pulse" />
                   <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Supply Change</h2>
                 </div>
                 <div className="text-3xl font-mono text-white">
                   +<AnimatedNumber value={90} suffix=".136" />
                 </div>
              </div>
              
              <div className="flex bg-[#000] rounded-lg p-1 border border-white/5">
                {TIME_FRAMES.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setSelectedTimeFrame(tf)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      selectedTimeFrame === tf 
                        ? 'bg-[#222] text-[#FE9A4C] shadow-sm' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    {/* Gradient breakdown based on user request:
                      #FFCB67 9.98%
                      #ED5409 36.51%
                      #506179 58.43%
                      #214E81 73.82%
                      #102D3C 86.12%
                      
                      Opacity adjustment: 0.7 at top -> 0.1 at bottom
                    */}
                    <linearGradient id="sonicGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="250">
                      <stop offset="9.98%" stopColor="#FFCB67" stopOpacity={0.7}/>
                      <stop offset="36.51%" stopColor="#ED5409" stopOpacity={0.6}/>
                      <stop offset="58.43%" stopColor="#506179" stopOpacity={0.4}/>
                      <stop offset="73.82%" stopColor="#214E81" stopOpacity={0.25}/>
                      <stop offset="86.12%" stopColor="#102D3C" stopOpacity={0.1}/>
                    </linearGradient>
                    
                    {/* Stroke Gradient Fix: 
                      Using gradientUnits="userSpaceOnUse" to lock the gradient to the container coordinates 
                      instead of the bounding box of the line path. 
                      y2="250" matches the container height (h-[250px]).
                    */}
                    <linearGradient id="strokeGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="250">
                      <stop offset="9.98%" stopColor="#FFCB67" stopOpacity={1}/>
                      <stop offset="36.51%" stopColor="#ED5409" stopOpacity={1}/>
                      <stop offset="58.43%" stopColor="#506179" stopOpacity={1}/>
                      <stop offset="73.82%" stopColor="#214E81" stopOpacity={1}/>
                      <stop offset="86.12%" stopColor="#102D3C" stopOpacity={1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff08" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#444', fontSize: 10 }}
                    dy={10}
                  />
                  <YAxis 
                    orientation="right" 
                    tick={{ fill: '#444', fontSize: 10 }} 
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => value.toFixed(0)}
                    domain={['dataMin - 50', 'dataMax + 50']}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                    itemStyle={{ color: '#aaa' }}
                    cursor={{ stroke: '#ffffff20', strokeWidth: 1 }}
                  />
                  {/* Stroke color uses the new userSpaceOnUse gradient for fixed vertical mapping */}
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="url(#strokeGradient)" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#sonicGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Stats Column */}
          <div className="space-y-6">
            {/* Stat 1 */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Current Supply</h3>
              <div className="text-3xl font-bold text-white tracking-tight flex items-baseline gap-1">
                <AnimatedNumber value={3842241} /> <span className="text-[#FE9A4C] text-lg">S</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">S Burned</h3>
              <div className="text-3xl font-bold text-white tracking-tight flex items-baseline gap-1">
                 <AnimatedNumber value={124590} /> <span className="text-[#FE9A4C] text-lg">S</span>
              </div>
              <p className="text-[10px] text-gray-600 mt-2">*Updated 45 seconds ago</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">S Issued</h3>
              <div className="text-3xl font-bold text-white tracking-tight flex items-baseline gap-1">
                <AnimatedNumber value={3842241} /> <span className="text-[#FE9A4C] text-lg">S</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Gauges Section --- */}
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-12">
           <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/5">
              <div className="flex gap-2">
                 {TIME_FRAMES.map((tf) => (
                  <span key={tf} className={`text-xs cursor-pointer ${tf === '7D' ? 'text-[#FE9A4C] font-bold' : 'text-gray-600 hover:text-gray-400'}`}>
                    {tf}
                  </span>
                 ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-medium bg-black/40 rounded-lg p-1">
                 <button 
                  onClick={() => setCurrency('S')}
                  className={`px-3 py-1 rounded transition-colors ${currency === 'S' ? 'bg-[#FE9A4C] text-black' : 'text-gray-500'}`}>
                    S
                 </button>
                 <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded transition-colors ${currency === 'USD' ? 'bg-[#FE9A4C] text-black' : 'text-gray-500'}`}>
                    USD
                 </button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Speedometer 
                value={127} 
                max={200} 
                suffix="K"
                label="Burn" 
                subLabel="S / Year" 
                colorStart="#FFCB67" 
                colorEnd="#FE9A4C" 
              />
              <Speedometer 
                value={0.75} 
                max={2} 
                suffix="%"
                label="Supply Change" 
                subLabel="/ Year" 
                colorStart="#214E81" 
                colorEnd="#506179" 
              />
              <Speedometer 
                value={1.25} 
                max={2} 
                suffix="%"
                label="Issuance" 
                subLabel="/ Year" 
                colorStart="#214E81" 
                colorEnd="#506179" 
              />
           </div>
        </div>

        {/* --- Buybacks & Burn Table --- */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Buybacks & Burn</h2>
          
          <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="bg-[#161616] text-xs uppercase font-semibold text-gray-500">
                  <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Date & Time</th>
                    <th className="px-6 py-4">TX Hash</th>
                    <th className="px-6 py-4 text-right flex items-center justify-end gap-1">
                      Amount <ArrowUpRight size={14} />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {TRANSACTIONS.map((tx) => (
                    <tr key={tx.id} className="hover:bg-white/5 transition-colors group cursor-default">
                      <td className="px-6 py-4">{tx.id}</td>
                      <td className="px-6 py-4 text-white">
                        {tx.date} <span className="text-gray-600 mx-1">|</span> {tx.time}
                      </td>
                      <td className="px-6 py-4">
                         <a href="#" className="flex items-center gap-2 text-[#214E81] hover:text-[#506179] transition-colors">
                           <ExternalLink size={14} />
                           <span className="font-mono">{tx.hash}</span>
                         </a>
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-[#FE9A4C] group-hover:text-[#FFCB67]">
                        {tx.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination / View All Mock */}
            <div className="px-6 py-4 border-t border-white/5 text-center">
              <button className="text-xs font-medium text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                View All Transactions
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-white/5 bg-[#080808] mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            
            <div className="space-y-4 max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <SonicLogo className="h-8 w-auto text-white" />
              </div>
              <p className="text-gray-600 text-sm">
                © 2025 Sonic Labs. All rights reserved.
              </p>
              <div className="flex gap-4 pt-2">
                 {[Send, Twitter, Github, MessageCircle, Globe].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#222] transition-all">
                     <Icon size={18} />
                   </a>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div>
                <h4 className="text-sm font-semibold text-white mb-6">External</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  {['Website', 'Docs', 'Blog', 'Media Kit'].map(item => (
                    <li key={item}><a href="#" className="hover:text-[#FE9A4C] transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-6">Legal</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Important Notice'].map(item => (
                    <li key={item}><a href="#" className="hover:text-[#FE9A4C] transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
