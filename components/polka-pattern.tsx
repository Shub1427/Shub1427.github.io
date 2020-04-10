import React from 'react';

export default function PolkaPattern() {
  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        zIndex: -1,
        left: 0,
        top: 0,
      }}
    >
      <defs>
        <pattern
          id="polka-dots"
          x="0"
          y="0"
          patternUnits="userSpaceOnUse"
          width="25"
          height="25"
        >
          <circle cx="12.5" cy="12.5" r="2" fill="#e3f2fd"></circle>
        </pattern>
      </defs>

      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#polka-dots)"
      ></rect>
    </svg>
  );
}
