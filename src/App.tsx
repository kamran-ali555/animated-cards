import React from 'react';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';

const cards = [
  {
    icon: Sparkles,
    title: "Magic Effects",
    description: "Experience the power of stunning animations and transitions",
    gradient: "from-purple-600 to-pink-600",
    hoverGradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400"
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Built with modern technologies and best practices",
    gradient: "from-blue-600 to-cyan-600",
    hoverGradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400"
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Carefully crafted with attention to every detail",
    gradient: "from-emerald-600 to-teal-600",
    hoverGradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400"
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for the best possible user experience",
    gradient: "from-orange-600 to-amber-600",
    hoverGradient: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400"
  }
];

function Card({ icon: Icon, title, description, gradient, hoverGradient, iconBg, iconColor }) {
  return (
    <div className="group relative">
      {/* Gradient background with animation */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`} />
      
      {/* Card content */}
      <div className="relative flex flex-col items-center px-7 py-6 bg-gray-800 ring-1 ring-gray-700 rounded-lg leading-none space-y-6 transition duration-200 hover:transform hover:scale-[1.02]">
        <div className={`flex items-center justify-center w-12 h-12 ${iconBg} rounded-full`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        
        <div className="space-y-2 text-center">
          <h3 className="text-white text-lg font-semibold">
            {title}
          </h3>
          <p className="text-gray-300 text-sm max-w-[280px]">
            {description}
          </p>
        </div>
        
        <button className={`px-4 py-2 bg-gradient-to-r ${hoverGradient} text-white text-sm font-medium rounded-md hover:opacity-90 transition-all duration-200 transform hover:scale-105`}>
          Learn More
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;