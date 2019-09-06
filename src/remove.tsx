import React from 'react';

interface IProps {
  classNames?: string; // additional classes e.g. to set width (not height)
}

export const IconRemove: React.FC<IProps> = ({ classNames }) => {
  return (
    <div className={`my-svg-icon ${classNames}`}>
      <div className="my-svg-container">
        <svg className="my-svg-scaling" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 13H5v-2h14v2z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  );
};
