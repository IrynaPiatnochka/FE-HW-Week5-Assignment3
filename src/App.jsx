
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


const App = () => {
  return (
      <div className="container">
        <Routes>
          <Route path="/" element={<CharacterList/>} />
          <Route path="/characters/:characterId" element={<CharacterDetail/>} />
        </Routes>
      </div>
  );
};

export default App;
