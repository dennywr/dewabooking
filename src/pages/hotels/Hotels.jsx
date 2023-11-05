import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './hotels.scss';

export default function Hotels() {
  return (
    <div className="hotels">
      <Navbar />
      <Header type={'list'} />
    </div>
  );
}
