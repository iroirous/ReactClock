import React from 'react';
import style from './stopwatch.css';

class Stopwatch extends React.Component{
    constructor(){
        super();
        this.state ={
            elapsed: 0,
            state: 'reset',
            elapsedMemory: 0
        };
    }

    clear(){
        this.setState({
            elapsed: 0,
            state: 'reset'
        });
    }

    start(){
        this.setState({
            startTime: new Date().getTime(),
            elapsed: 0,
            timer: setInterval(() => {
                    this.setState({
                        elapsed: new Date().getTime() - this.state.startTime
                    });
                }, 33),
            state: 'running'
        });
    }

    pause(){
        clearInterval(this.state.timer);
        this.setState({
            elapsedMemory: this.state.elapsed,
            state: 'pause'
        });
    }

    restart(){
        this.setState({
            startTime: new Date().getTime(),
            elapsed: this.state.elapsedMemory,
            timer: setInterval(() => {
                this.setState({
                    elapsed: this.state.elapsedMemory + (new Date().getTime() - this.state.startTime)
                });
            }, 33),
            state: 'running'
        });
    }

    addZero(num, length = 2){
        if(length === 3){
            if(num < 10){
                return "00" + num;
            } else if(num < 100){
                return "0" + num;
            }
            return num;
        }

        if(num < 10){
            return "0" + num;
        } else {
            return num;
        }
    }

    render(){
        const elapsed = this.state.elapsed / 1000;
        const hour = this.addZero(parseInt(elapsed / 3600));
        const min = this.addZero(parseInt((elapsed / 60) % 60));
        const sec = this.addZero(parseInt(elapsed % 60));
        const milli = this.addZero(this.state.elapsed % 1000, 3);

        return(
            <div className="container">
                <div className={style.stopwatchTime}>
                    <span className={style.stopwatchTimeBig}>{hour}:{min}:{sec}</span>
                    <span className={style.stopWatchMilliSeconds}>:{milli}</span>
                </div>
                <div className={style.stopwatchButtons}>
                    <ul>
                        {(this.state.state === 'reset') && (
                            <li onClick={() => this.start()}>Start</li>
                        )}
                        {(this.state.state === 'running') && (
                            <li onClick={() => this.pause()}>Pause</li>
                        )}
                        {(this.state.state === 'pause') && (
                            <li onClick={() => this.restart()}>Continue</li>
                        )}
                        {(this.state.state === 'pause') && (
                            <li onClick={() => this.clear()}>Clear</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Stopwatch;