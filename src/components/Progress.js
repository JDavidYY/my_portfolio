import React from 'react';

const Progress = ({ item }) => {
  return (
    <div className="justify-between items-center mt-4 text-center">
      <span className="text-medium text-base leading-5 text-gray-800 w-1/3">
        {item.label}
      </span>
    </div>
  );
};

export default Progress;