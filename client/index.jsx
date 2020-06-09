/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import WeaponsDisplay from './components/weaponsDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weaponType: '',
      weaponRarity: '',
      guns: [],
    };
  }

  searchClick(type, rarity) {
    if (type !== '' && rarity !== '') {
      axios.get(`/getgunswithrarity/${rarity} ${type}`)
        .then((data) => {
          this.setState({
            guns: data.data,
          });
        });
    } else {
      axios.get(`/getguns/${type}`)
        .then((data) => {
          this.setState({
            guns: data.data,
          });
        });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { guns, weaponType, weaponRarity } = this.state;

    return (
      <div>
        <h1 className="title">DESTINY 2</h1>
        <img className="D2image" src="D2.png" alt="D2" />
        <h1 className="smalltext">WEAPON FINDER</h1>
        <div id="header">
          <div>
            <label>WEAPON TYPE:</label>
            <select onChange={(event) => { this.handleChange(event); }} id="weaponType">
              <option value="">--Select Weapon Type--</option>
              <option value="Auto Rifle">Auto Rifles</option>
              <option value="Combat Bow">Bows</option>
              <option value="Fusion Rifle">Fusion Rifles</option>
              <option value="Grenade Launcher">Grenade Launchers</option>
              <option value="Hand Cannon">Hand Cannons</option>
              <option value="Machine Gun">Machine Guns</option>
              <option value="Pulse Rifle">Pulse Rifles</option>
              <option value="Rocket Launcher">Rocket Launchers</option>
              <option value="Scout Rifle">Scout Rifles</option>
              <option value="Shotgun">Shotguns</option>
              <option value="Sidearm">Sidearms</option>
              <option value="Sniper Rifle">Sniper Rifles</option>
              <option value="Submachine Gun">Submachine Guns</option>
              <option value="Sword">Swords</option>
            </select>
          </div>
          <div>
            <label>Rarity</label>
            <select onChange={(event) => { this.handleChange(event); }} id="weaponRarity">
              <option value="">--Select Weapon Rarity--</option>
              <option value="Exotic">Exotic</option>
              <option value="Legendary">Legendary</option>
              <option value="Rare">Rare</option>
              <option value="Common">Common</option>
            </select>
          </div>
          <button onClick={() => { this.searchClick(weaponType, weaponRarity); }} type="button">SEARCH</button>
        </div>
        <WeaponsDisplay guns={guns} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
