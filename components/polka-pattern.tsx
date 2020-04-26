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
          width="50"
          height="50"
        >
          <circle fill="#e3f2fd" cx="12.5" cy="12.5" r="2.0833"></circle>
          <circle fill="#e3f2fd" cx="37.5" cy="12.5" r="2.0833"></circle>
          <circle fill="#e3f2fd" cx="0" cy="37.5" r="2.0833"></circle>
          <circle fill="#e3f2fd" cx="25" cy="37.5" r="2.0833"></circle>
          <circle fill="#e3f2fd" cx="50" cy="37.5" r="2.0833"></circle>
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
