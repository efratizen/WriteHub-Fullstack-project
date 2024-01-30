import React, { useState } from 'react';
import AdminSundayUpdate from './AdminSundayUpdate';
import FinishUpdate from './finishUpdate';
import './AdminSundayUpdate.css'

function MainAdminSundayUpdate() {
  const [state, setState] = useState(0);

  const handleFinish = () => {
    setState(1);
  }
  const renderStates = () => {
    switch (state) {
      case 0:
        return <AdminSundayUpdate handleFinish={handleFinish}></AdminSundayUpdate>
      case 1:
        return <FinishUpdate></FinishUpdate>
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

export default MainAdminSundayUpdate;