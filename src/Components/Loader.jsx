import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-violet-500/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-violet-500 rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
