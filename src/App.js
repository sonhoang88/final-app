// Import necessary components
import './App.css';
import { Angle } from "./components/angle/Angle";
import { Sound } from "./components/sound/Sound";
import { Command } from "./components/command/command";
import Search from './components/search/Search';
import { TableBootstrap } from "./components/table/TableBootstrap";
import { Time } from "./components/time/Time";
import "bootstrap/dist/css/bootstrap.min.css";
import { Target } from './components/target/Target';

function App() {
  return (
    <div className='page'>
      <div className="body">
        <h1 className="title">Turning table sound classification</h1>
        <div className="context">
          <div className='display'>
            <Time />
            <Angle />
            <Target />
            <Sound />
            <Command />
          </div>
        </div>
        {/* search */}
        <div className='searchArea'>
          <div className='search'>
            <Search />
          </div>
        </div>
        {/* history */}
        <div className='historyTableArea'>
          <div className='historyTable'>
            <TableBootstrap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
