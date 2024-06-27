
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


const App = () => {
  return (
      <div className="container">
        <Routes>
          <Route path="/" component={CharacterList} />
          <Route path="/characters/:characterId" component={CharacterDetail} />
        </Routes>
      </div>
  );
};

export default App;
