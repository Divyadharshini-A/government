import React from 'react';
import people1 from '../../assests/people1.webp';
import bitcoin from '../../assests/bitcoin.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">" WELCOME TO THE OFFICIAL GOVERNMENT FUND ALLOWANCE PORTAL "</h1>
      <p>We welcome each and every citizen who are interested to know about the government fund allowance scheme and the tax expenditure.This project is basically acts as a tool to rise and ask any queries directly to the government officials. </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people1} alt ='no image'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={bitcoin} alt ='no' />
    </div>
  </div>
);

export default Header;