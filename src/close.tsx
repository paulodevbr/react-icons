import React from 'react';

interface IProps {
  additionalClasses?: string; // e.g. to set width; not height
}

export const IconClose: React.FC<IProps> = ({ additionalClasses }) => {
  return (
    <div className={`my-svg-icon ${additionalClasses}`}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  );
};
