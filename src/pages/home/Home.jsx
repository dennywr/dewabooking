import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './home.scss';
import Featured from '../../components/featured/Featured';
import { PropertyList } from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
export default function Home() {
  return (
    <div>
      <div className="topContainer">
        <Navbar />
        <Header />
      </div>
      <div className="featuredContainer">
        <Featured />
      </div>
      <div className="propertyListContainer">
        <h1 className="propertyListTitle">Browse the property type</h1>
        <PropertyList />
        <h1 className="featuredPropertiesTitle">Home guest love</h1>
        <FeaturedProperties />
      </div>
      <MailList />
    </div>
  );
}
