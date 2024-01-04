import './searchItem.scss';

import React from 'react';

export default function SearchItem() {
  return (
    <div>
      <div className="siContainer">
        <img src="https://cf2.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=" alt="" className="siImage" />
        <div className="siDesc">
          {/* <div className="siDescItem"> */}
          <h2 className="siTitle">Tower Street Apartements</h2>
          <span className="siDistance">550m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Studio apartement with air conditioning</span>
          <span className="siFeatures">Entire studi . 1 bathroom . 1 full bed</span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
          {/* </div> */}
        </div>
        <div className="siDetail">
          <div className="siDetailReview">
            <span className="siDetailReviewPredicat">Excellent</span>
            <span className="siDetailReviewRating">8.9</span>
          </div>
          <div className="siDetailPrice">
            <span className="siDetailPriceInfo">$110</span>
            <small>Includes taxes and fees</small>
            <button>See availabillity</button>
          </div>
        </div>
      </div>
    </div>
  );
}
