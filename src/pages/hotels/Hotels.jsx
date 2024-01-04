import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './hotels.scss';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { useState } from 'react';
import SearchItem from '../searchItem/SearchItem';

export default function Hotels() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  // console.log(location);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <>
      <div className="hotels">
        <Navbar />
        <Header type={'list'} />
      </div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="listTitle">Search</h2>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label>Check-in date</label>
              <span>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listOption">
                <div className="listOptionItem">
                  <label>Min price per night</label>
                  <input type="text" />
                </div>
                <div className="listOptionItem">
                  <label>Max price per night</label>
                  <input type="text" />
                </div>
                <div className="listOptionItem">
                  <label>Adult</label>
                  <input type="text" placeholder={options.adult} />
                </div>
                <div className="listOptionItem">
                  <label>Childrem</label>
                  <input type="text" placeholder={options.children} />
                </div>
                <div className="listOptionItem">
                  <label>Room</label>
                  <input type="text" placeholder={options.room} />
                </div>
              </div>
              <button>Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  );
}
