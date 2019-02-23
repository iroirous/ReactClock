import React from 'react';
import style from './digitalClock.css';

class DigitalClock extends React.Component {
    constructor(){
        super();
        this.date = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        this.month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.state = {time: new Date()};
        setInterval(() => {this.setState({time: new Date()})}, 400)
    }

    addZero(num){
        if(num < 10){
            return "0" + num;
        } else {
            return num;
        }
    }
    
    getDay(){
        return this.date[this.state.time.getDay()];
    }

    getMonth(){
        return this.month[this.state.time.getMonth()];
    }

    render(){
        const time = this.state.time;
        return(
            <div className={style.dClockContainer}>
                <div className={style.dClockMain}>
                    <div className={style.dClockTime}>
                    {this.addZero(time.getHours())}:{this.addZero(time.getMinutes())}:{this.addZero(time.getSeconds())}
                    </div>
                    
                    <div className={style.dClockDate}>
                        {this.getDay(time.getDay())}, {this.getMonth(time.getMonth)} {time.getDate()}, {time.getFullYear()}
                    </div>
                </div>
            </div>
        );
    }
}
export default DigitalClock;