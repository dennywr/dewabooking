import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './hotel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';

export default function Hotel() {
  const photos = [
    {
      src: 'https://cf2.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=',
    },
    {
      src: 'https://cf2.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=',
    },
  ];
  return (
    <>
      <div className="hotel">
        <Navbar />
        <Header type={'list'} />
      </div>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="reserveButtonOnTop">Reserve or Book Now!</button>
          <div className="hotelTextInfo">
            <h1 className="hotelTitle">Tower Street Apartements</h1>
            <span className="hotelLocation">
              <FontAwesomeIcon icon={faLocationDot} /> 5 Brazil, Old Town, 33-332 Krakow, Poland
            </span>
            <h3 className="hotelDistance">Excellent location - 500m from center</h3>
            <span className="hotelOffers">Book a stay over $114 at thos property and get a free airport taxi</span>
          </div>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="imageWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetailInfo">
            <div className="hotelDesc">
              <h1 className="hotelDescTitle">Stay in the heart of Krakow</h1>
              <span className="hotelDescDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nemo ab, aliquid, nihil cumque minus sunt mollitia illum modi possimus consectetur amet perferendis vero sit animi debitis ducimus nam itaque corporis
                veniam aspernatur ipsum! Sequi necessitatibus voluptates minima ab voluptas.
              </span>
            </div>
            <div className="hotelReservationOffer">
              <h1 className="hroTitle">Perfect for a 9-night stay!</h1>
              <span className="hroHighlightDistance">Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
              <div className="hroPrice">
                <strong>$945 </strong> (9 nights)
              </div>
              <button className="reserveButton">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hotel">
        <MailList />
      </div>
      <Footer />
    </>
  );
}
