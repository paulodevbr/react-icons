import React from 'react';

interface IProps {
  width?: string; // must be width; cannot set height
}

const IconZoomIn: React.FunctionComponent<IProps> = ({ width }) => {
  return (
    <div className="my-svg-icon" style={{ width }}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
        </svg>
      </div>
    </div>
  );
};

export default IconZoomIn;
