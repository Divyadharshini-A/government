import React from 'react';
import tech from '../../assests/tech.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={tech} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
     
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>The innovation ecosystem should keep pushing the technological frontier but also foster wider economic impacts from the new advances. With the intangible asset of knowledge becoming an increasingly important driver of economic success, research and development systems and patent regimes should be improved to promote broader diffusion of technologies embodying new knowledge.</p>
      <h2>Ranking(Indian states and union territories by NSDP per capita (Current Prices, ₹))</h2>
      <table>
        <tr>
          <th>RANK</th>
          <th>STATE/UNION TERRITORY</th>
          <th>INR</th>
        </tr>
        <tr>
    <td>1</td>
    <td>Goa</td>
    <td>4,35,959</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Sikkim</td>
    <td>4,03,375</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Delhi</td>
    <td>3,76,221</td>
  </tr>
      </table>

    </div>
    
  </div>
);

export default Possibility;