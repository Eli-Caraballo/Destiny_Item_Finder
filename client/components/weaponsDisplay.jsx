/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import stats from '../../weaponStats.js';

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
                    <h2>{gun.displayProperties.name}</h2>
                    <h3>{gun.displayProperties.description}</h3>
                    {
                      // eslint-disable-next-line consistent-return
                      gun.investmentStats.map((item) => {
                        if (item.value > 0) {
                          // eslint-disable-next-line no-bitwise
                          const id = item.statTypeHash >> 32;
                          return (
                            <div>
                              <div>{`${stats[id].displayProperties.name}: ${stats[id].displayProperties.description}`}</div>
                              <div>{item.value}</div>
                            </div>
                          );
                        }
                      })
                    }
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
