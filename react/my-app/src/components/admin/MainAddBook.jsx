import React, { useState } from 'react';
import AdminAddBook from './AdminAddBook';
import FinishUpdate from './finishUpdate';
import './AdminAddBook.css'
import FinishUpload from './FinishUpload';

function MainAdminAddBook() {
  const [state, setState] = useState(0);
  const [name, setName] = useState("");

  const handleFinish = () => {
    setState(1);
  }
  const renderStates = () => {
    switch (state) {
      case 0:
        return <AdminAddBook handleFinish={handleFinish} setBookName={(n) => { setName(n) }}></AdminAddBook>
      case 1:
        return <FinishUpload name={name}></FinishUpload>
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

export default MainAdminAddBook;