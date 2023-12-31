import './mailList.scss';

import React from 'react';

export default function MailList() {
  return (
    <div className="mail">
      <h2 className="mailTitle">Save time, save money!</h2>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInput">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
