import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Security and Reliability',
    text: 'We mainly concerned on securing the users details and we make sure if they raise any query to government officials they are addressed ANONYMOUSLY ',
  },
  {
    title: 'Identity Agreement',
    text: 'Smart Contracts could be Initiated so that not even a single detail of an user is not revealed',
  },
  {
    title: 'Promotes Transparency',
    text: 'This website provides up to data letter notifications and transparent fund expenditure to the public with evidances',
  },
  {
    title: 'Encryption and web 3.0 technology',
    text: 'Encryption provides secure authentication and verification of messaging between the government server and the user',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">“The internet is no longer a web that we connect to. Instead, it’s a computerized, networked, and interconnected world that we live in. This is the future, and what we’re calling the Internet of Things.”

</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;