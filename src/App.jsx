import './App.css';
import { Fragment } from 'react';
import SearchBar from './components/SearchBar';
import MediaDisplay from './components/MediaDisplay';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <Fragment>
      <SearchBar />
      <MediaDisplay />
      <SearchResult />
    </Fragment>
  );
}

export default App;
