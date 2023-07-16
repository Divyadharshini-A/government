import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="GOVERNMENT FUND ALLOWANCE PORTAL" text="This portal is designed more specically and technically in such a way that user can access all the details about the tax expenditure" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Our responsibilites for our Future Developing Nation
      </h1>
      <p>Explore our Economy</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="In our website we provide specialized AI-based Chatbots which helps in retrieving information faster" />
      <Feature title="Knowledge" text="This portal is built in such a way that all user can access the required details and gain enough knowledge regarding the tax expenditure" />
      <Feature title="Database" text=" We used the latest developing technology Blobkchain which maintains the user details without revealing it .This ensures 100 percent security" />
    </div>
  </div>
);

export default WhatGPT3;