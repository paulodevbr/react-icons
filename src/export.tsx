import React from 'react';

interface IProps {
  additionalClasses?: string; // e.g. to set width; not height
}

export const IconExport: React.FC<IProps> = ({ additionalClasses }) => {
  return (
    <div className={`my-svg-icon ${additionalClasses}`}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zM192 336v-32c0-8.84 7.16-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.84 0-16-7.16-16-16zm379.05-28.02l-95.7-96.43c-10.06-10.14-27.36-3.01-27.36 11.27V288H384v64h63.99v65.18c0 14.28 17.29 21.41 27.36 11.27l95.7-96.42c6.6-6.66 6.6-17.4 0-24.05z"/>
        </svg>
      </div>
    </div>
  );
};
