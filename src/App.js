import React from 'react';
import Pad from './componentes/Pad';


function App() {
  return (  
    <div className="App container rounded" id="drum-machine">
      <div className="row ">
        <Pad />
      </div>
    </div>
  );
}

export default App;