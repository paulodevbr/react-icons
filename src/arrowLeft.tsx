import React from 'react';

interface IProps {
  classNames?: string; // additional classes e.g. to set width (not height)
}

export const IconArrowLeft: React.FC<IProps> = ({ classNames }) => {
  return (
    <div className={`my-svg-icon ${classNames}`}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
        </svg>
      </div>
    </div>
  );
};
