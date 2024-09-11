import React, { useState } from 'react';

const NavSections = () => {
    
  const [activeSection, setActiveSection] = useState('indicator-strategies');

  const navItems = [
    { id: 'indicator-strategies', label: 'Indicator Strategies' },
    { id: 'candlestick-patterns', label: 'Candlestick Patterns' },
    { id: 'crypto-strategies', label: 'Crypto Strategies' },
    { id: 'social-trading', label: 'Social Trading (Coming Soon)' },
  ];

  const handleClick = (id) => {
    if (!navItems.find(item => item.id === id)?.disabled) {
      setActiveSection(id);
    }
  };

  return (
    <div className="flex flex-wrap justify-center md:justify-normal mb-8">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`px-4 py-2  rounded bg-transparent  ${activeSection === item.id ? 'text-green-500 ' : 'text-white '}`}
          onClick={() => handleClick(item.id)}
          disabled={item.disabled}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default NavSections;
