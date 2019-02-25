import React from 'react';
import Header from './header.js';

class Stopwatch extends React.Component{
    render(){
        return(
            <div className="container">
                <Header />
                <h1>Stopwatch</h1>
            </div>
        );
    }
}
export default Stopwatch;