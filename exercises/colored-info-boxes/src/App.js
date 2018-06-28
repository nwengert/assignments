import React from 'react';
import Component from "./Component";



function App() {
    const user = {
      // have each thing be an array, so that you can do 10 different things
      Title: ['This one for them good girls', 'Them hood girls', 'Straight masterpieces'],
      Subtitle: ['Two roads', 'Converged', 'In an open wood'],
      Information: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum voluptatem exercitationem hic vero iure, ut illo a nobis qui laborum repellat accusamus saepe perferendis corrupti eligendi nisi at iste deleniti.',
    }
    return (
      <div>
        {Component({ user: user})}

      </div>
    );
  }

export default App;
