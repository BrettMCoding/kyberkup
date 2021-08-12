import './App.css';
import Header from './Header.js'
import Rulesinfo from './Rulesinfo.js'
import Nearbyfood from './Nearbyfood.js'
import Nearbylodging from './Nearbylodging.js'
import Playersshouldbring from './Playersshouldbring.js'
import Prizes from './Prizes.js'
import Registerlink from './Registerlink.js'
import Schedule from './Schedule.js'
import Sponsors from './Sponsors.js'
import Venue from './Venue.js'

function App() {
  return (
    <div className="App">
        <Header />
        <div className="Body">
            <Rulesinfo />
            <Schedule />
            <Prizes />
            <Venue />
            <Registerlink />
            <Playersshouldbring />
            <Sponsors />
            <Nearbyfood />
            <Nearbylodging />
        </div>
    </div>
  );
}

export default App;
