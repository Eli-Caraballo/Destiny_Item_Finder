/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

const WeaponsDisplay = ({ guns }) => {
  const [details, setDetails] = useState('');

  return (
    <div>
      {
      guns.length === 0 ? <h1>Select Weapon Type</h1>
        : guns.map((gun) => (
          // eslint-disable-next-line no-unused-expressions
          <div key={gun.hash} onClick={() => { details === gun.hash ? setDetails('') : setDetails(gun.hash); }}>
            {
            details !== gun.hash ? (
              <div>
                <img src={`https://www.bungie.net/${gun.displayProperties.icon}`} alt="Weapon Icon" />
                <div>{gun.displayProperties.name}</div>
              </div>
            )
              : null
            }
            {
              details === gun.hash ? (
                <div className="details">
                  <img src={`https://www.bungie.net/${gun.screenshot}`} alt="Weapon" />
                  <div className="fadebox">
                    <h4>{gun.displayProperties.name}</h4>
                    <h6>{gun.displayProperties.description}</h6>
                  </div>
                </div>
              )
                : null
            }
          </div>
        ))
      }
    </div>
  );
};

export default WeaponsDisplay;


// `https://www.bungie.net/${gun.screenshot}`