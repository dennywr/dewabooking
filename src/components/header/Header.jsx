import React from 'react';
import './header.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

export default function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  function handleOption(name, operation) {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  }
  return (
    <div>
      <div className="header">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
        {/* header text */}
        {type !== 'list' && (
          <>
            <div className="headerText">
              <h1>Find your next stay</h1>
              <p>Search deals on hotels, homes, and much more...</p>
            </div>
            {/* header search */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" className="headerSearchInput" placeholder={'Where are you going?'} />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                {openDate && <DateRange editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date" />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {/* add option */}
                {openOption && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption('adult', 'd')}>
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.adult}`}</span>
                        <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption('children', 'd')}>
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.children}`}</span>
                        <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption('room', 'd')}>
                          -
                        </button>
                        <span className="optionCounterNumber">{`${options.room}`}</span>
                        <button className="optionCounterButton" onClick={() => handleOption('room', 'd')}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchButton">
                <button className="searchButtonItem">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
