import React from 'react';

interface IProps {
  size?: number; // size of square container
  style?: React.CSSProperties; // not for height or width
}

export const IconApple: React.FC<IProps> = ({ size = 24, style }) => {
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
          viewBox="0 0 1000 1187.198"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M979.042 925.188c-17.954 41.477-39.206 79.657-63.828 114.759-33.563 47.853-61.044 80.976-82.222 99.37-32.83 30.192-68.006 45.654-105.672 46.533-27.041 0-59.652-7.694-97.611-23.303-38.085-15.536-73.084-23.23-105.086-23.23-33.563 0-69.56 7.694-108.061 23.23-38.561 15.609-69.625 23.743-93.376 24.55-36.12 1.538-72.123-14.364-108.06-47.78-22.938-20.006-51.627-54.302-85.997-102.888-36.875-51.883-67.191-112.047-90.942-180.639C12.751 781.703 0 709.96 0 640.504c0-79.562 17.192-148.183 51.627-205.687 27.063-46.19 63.066-82.625 108.127-109.373 45.06-26.748 93.749-40.378 146.182-41.25 28.69 0 66.312 8.874 113.066 26.315 46.622 17.5 76.557 26.374 89.682 26.374 9.812 0 43.068-10.376 99.443-31.064 53.313-19.185 98.307-27.129 135.168-24 99.883 8.062 174.923 47.436 224.828 118.372-89.33 54.126-133.52 129.936-132.64 227.188.806 75.751 28.287 138.788 82.295 188.84 24.476 23.23 51.81 41.183 82.222 53.934-6.595 19.127-13.557 37.447-20.958 55.035zM749.964 23.75c0 59.374-21.692 114.81-64.928 166.122-52.176 61-115.286 96.248-183.724 90.686a184.836 184.836 0 01-1.378-22.497c0-56.999 24.813-117.998 68.878-167.874 21.999-25.253 49.978-46.25 83.907-63 33.856-16.5 65.88-25.625 95.999-27.187.88 7.937 1.246 15.875 1.246 23.75z"/>
        </svg>
      </div>
    </div>

  );
};
