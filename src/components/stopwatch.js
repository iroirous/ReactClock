import React from 'react';
import style from './stopwatch.css';

class Stopwatch extends React.Component{
    constructor(){
        super();
        this.state ={
            elapssed: 0,
            state: 'reset',
            elapssedMemory: 0,
            laps: []
        };
    }

    clear(){
        this.setState({
            elapssed: 0,
            state: 'reset',
            laps: []
        });
    }

    start(){
        this.setState({
            startTime: new Date().getTime(),
            elapssed: 0,
            timer: setInterval(() => {
                    this.setState({
                        elapssed: new Date().getTime() - this.state.startTime
                    });
                }, 33),
            state: 'running'
        });
    }

    pause(){
        clearInterval(this.state.timer);
        this.setState({
            elapssedMemory: this.state.elapssed,
            state: 'pause'
        });
    }

    lap(){
        let tmp = this.state.laps;
        tmp.push(this.state.elapssed);
        this.setState({
            laps: tmp
        });
    }

    restart(){
        this.setState({
            startTime: new Date().getTime(),
            elapssed: this.state.elapssedMemory,
            timer: setInterval(() => {
                this.setState({
                    elapssed: this.state.elapssedMemory + (new Date().getTime() - this.state.startTime)
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

    elapssedToString(time){
        const elapssed = time / 1000;
        const hour = this.addZero(parseInt(elapssed / 3600));
        const min = this.addZero(parseInt((elapssed / 60) % 60));
        const sec = this.addZero(parseInt(elapssed % 60));
        const milli = this.addZero(time % 1000, 3);

        return [hour, min, sec, milli];
    }

    render(){
        const elapssed = this.elapssedToString(this.state.elapssed);

        // ラップタイムを取得
        const laps = [];
        for(const num in this.state.laps){
            laps.push(this.elapssedToString(this.state.laps[num]));
        }

        return(
            <div className="container">
                <div className={style.stopwatchTime}>
                    <span className={style.stopwatchTimeBig}>{elapssed[0]}:{elapssed[1]}:{elapssed[2]}</span>
                    <span className={style.stopWatchMilliSeconds}>:{elapssed[3]}</span>
                </div>
                <div className={style.stopwatchLaps}>
                    <ul>
                        {
                            laps.reverse().map((num, idx) => (
                                <li key={idx}>
                                    <span className={style.stopwatchLapsNum}>Lap{this.addZero(laps.length - idx)}</span>
                                    {num[0]}:{num[1]}:{num[2]}<span className={style.stopwatchLapsMilli}>:{num[3]}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={style.stopwatchButtons}>
                    <ul>
                        {(this.state.state === 'reset') && (
                            <li onClick={() => this.start()}>Start</li>
                        )}
                        {(this.state.state === 'running') && (
                            <li onClick={() => this.pause()}>Pause</li>
                        )}
                        {(this.state.state === 'running') && (
                            <li onClick={() => this.lap()}>laps</li>
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