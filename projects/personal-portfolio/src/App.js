import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Content from './Content';
import BottomLinks from './BottomLinks';

const App = () => {
    return(
        <div>
            <Content />
            <BottomLinks />
        </div>
    )
}

export default App