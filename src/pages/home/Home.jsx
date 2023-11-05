import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './home.scss';
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
    </div>
  );
}
