import React from 'react';

export default function Button({label, type, onClick}) {
  return (
    <div className="main m-1">
      <button type={type} className="btn" onClick={onClick} style={{ backgroundColor: 'rgba(59, 113, 254, 1)', color: 'white' }}>
        {label}
      </button>
    </div>
  );
}
