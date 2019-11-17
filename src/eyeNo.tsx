import React from 'react';

interface IProps {
  size?: number; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconEyeNo: React.FC<IProps> = ({ size = 24, style }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
        height: size,
        width: size,
      }}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          width: '100%',
          padding: 0,
          paddingBottom: '100%',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
          }}
          viewBox="0 0 640 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M634 471L36 3.51A16 16 0 0013.51 6l-10 12.49A16 16 0 006 41l598 467.49a16 16 0 0022.49-2.49l10-12.49A16 16 0 00634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 00-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0023.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 01-44 60.2l37.74 29.5a333.7 333.7 0 0052.9-75.11 32.35 32.35 0 000-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0144.05-60.19l-37.74-29.5a333.6 333.6 0 00-52.89 75.1 32.35 32.35 0 000 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"/>
        </svg>
      </div>
    </div>

  );
};
