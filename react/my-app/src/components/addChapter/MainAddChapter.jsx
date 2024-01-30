import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddChapter from './AddChapter';
import FinishUploadChapter from './FinishUploadChapter';
import './StyleAddChapter.css'

function MainAddChapter({ gotosugg }) {
  const [state, setState] = useState(0);
  const [name, setName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const myUser = useSelector((state) => state.user.myUser);
// Hundle oploading a comment
  const handleFinish = (num) => {
    if (num === 1)
      setIsSuccess(true)
    else
      setIsSuccess(false)
    setState(1);
  }

  
  const renderStates = () => {
    switch (state) {
      case 0:
        return <AddChapter handleFinish={handleFinish}></AddChapter>;
      case 1:
        return <FinishUploadChapter isSuccess={isSuccess} myUser={myUser} gotosugg={gotosugg}></FinishUploadChapter>
      default:
        return null;
    }

  }


  return (
    <>
      <div className='center-content'>
        {renderStates()}
      </div>
    </>
  );
}

export default MainAddChapter;