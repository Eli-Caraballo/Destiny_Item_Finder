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
      guns.length === 0 ? <h1 className="temp">Select Weapon Type</h1> : null
      }
      <div className="weapons">
        {
        guns.length === 0 ? null
          : guns.map((gun) => (
            // eslint-disable-next-line no-unused-expressions
            <div key={gun.hash} onClick={() => { details === gun.hash ? setDetails('') : setDetails(gun.hash); }}>
              {
              details !== gun.hash ? (
                <div className="item">
                  <img className="icon" src={`https://www.bungie.net/${gun.displayProperties.icon}`} alt="Weapon Icon" />
                  <div>{gun.displayProperties.name}</div>
                </div>
              )
                : null
              }
              {
                details === gun.hash ? (
                  <div className="details">
                    <img className="weapon" src={`https://www.bungie.net/${gun.screenshot}`} alt="Weapon" />
                    <div className="fadebox">
                      Stats:
                      <h2 className="name">{gun.displayProperties.name}</h2>
                      <h3 className="description">{gun.displayProperties.description}</h3>
                      <div className="allstats">
                        {
                          // eslint-disable-next-line consistent-return
                          gun.investmentStats.map((item) => {
                            if (item.value > 0) {
                              // eslint-disable-next-line no-bitwise
                              const id = item.statTypeHash >> 32;
                              return (
                                <div key={stats[id].index} className="stat">
                                  <div>{`${stats[id].displayProperties.name}: ${item.value}`}</div>
                                </div>
                              );
                            }
                          })
                        }
                      </div>
                    </div>
                  </div>
                )
                  : null
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default WeaponsDisplay;
