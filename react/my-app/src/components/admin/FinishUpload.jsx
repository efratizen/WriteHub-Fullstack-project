import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function FinishUpload({ name }) {
  const green = '#0D98A0';

  const listBooks = useSelector((state) => state.book.listBooks); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_CHAPTERS' });
  }, [listBooks]);

  return (
    <div className="modal">
      <div id="success-icon">
        <div></div>
      </div>
      <svg
        id="close-modal"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 10 10"
      >
        <line x1="1" y1="-1" x2="9" y2="11" strokeWidth="2.5" />
        <line x1="9" y1="-1" x2="1" y2="11" strokeWidth="2.5" />
      </svg>
      <h1>
        <strong>Success!</strong>
      </h1>
      <svg
        className="progress"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 4.5"
      >
        <rect height="4.5" width="100" rx="2" ry="2" fill={green} />
      </svg>
      <p className="points">book {name} is launched</p>
      <hr />
      <p className="message">..............................</p>
    </div>
  );
}

export default FinishUpload;
