import React from 'react';

interface IProps {
  width?: string; // must be width; cannot set height
}

const IconChart: React.FC<IProps> = ({ width }) => {
  return (
    <div className="my-svg-icon" style={{ width }}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"/>
        </svg>
      </div>
    </div>
  );
};

export default IconChart;
