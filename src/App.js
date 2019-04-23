import React from 'react';
import Navbar from './Navbar.js';
import Cardku from './Cardku.js';

class App extends React.Component {
    constructor()
    {
        super();
        this.state = {};
    }

    render(){
        return(
            <div>
                <Navbar/>
                <Cardku/>
            </div>
        )
    }
}

export default App;