import React from 'react';

function FinishUploadChapter({ isSuccess, myUser, gotosugg }) {
  const green = '#0D98A0';
  const handleButtonClick = () => {
    gotosugg();
  }

  return (
    <div className="chp-modal">
      <div id={`chp-success-icon${isSuccess ? '' : '-failed'}`}>
        <div></div>
      </div>
      <svg
        id="chp-close-modal"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 10 10"
      >
        <line x1="1" y1="-1" x2="9" y2="11" strokeWidth="2.5" />
        <line x1="9" y1="-1" x2="1" y2="11" strokeWidth="2.5" />
      </svg>
      <h1>
        {isSuccess ? <strong>Success!</strong> : <strong>Failed!</strong>}
      </h1>
      <svg
        className={`chp-progress${isSuccess ? '' : '-failed'}`}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 4.5"
      >
        <rect height="4.5" width="100" rx="2" ry="2" fill={green} />
      </svg>
      {isSuccess ? <p className="chp-points">{myUser.firstName}, Your bid has been successfully uploaded</p> : <p className="chp-points">{myUser.firstName}, Your bid has been successfully uploaded</p>}
      <hr />
      {isSuccess ? <p className="chp-message">WriteHub wish you luck🤞</p> : <p className="chp-message">WriteHub apologies for the trouble😥</p>}
      {isSuccess && <button className="chp-button" onClick={handleButtonClick}>
        go to see your bid
      </button>}
    </div>
  );
}

export default FinishUploadChapter;
