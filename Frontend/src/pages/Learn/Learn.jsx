import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const Learn = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Learn;

