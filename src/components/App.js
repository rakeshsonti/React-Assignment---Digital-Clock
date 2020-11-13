import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
constructor(props)
{
    super(props);
    this.state={
        time:new Date(),
    };
    this.setIntervalId=null;
}

    getPadNumberToTwoDigits(val) {
    let newVar;
    newVar=(val < 10?`0`:'')+val;
    return newVar;
  }
  getTimeString() {
    const currTime = this.state.time;
    const [currHour,currMinutes,currSeconds,amorpm]=
   [
    currTime.getHours(),
    this.getPadNumberToTwoDigits(currTime.getMinutes()),
    this.getPadNumberToTwoDigits(currTime.getSeconds()),
    currHour >= 12 ? `PM` : "AM",
   ]
   const newHour = currHour > 12 ? currHour - 12 : currHour;
    // console.log(newHour, currMinutes, currSeconds, amorpm);
    const finalString= `${newHour}:${currMinutes}:${currSeconds} ${amorpm}`;
    return finalString;
  }
  componentWillUnmount()
  {
      clearInterval(this.setIntervalId);
  }
  componentDidMount()
  {
      this.setIntervalId=setInterval(()=>{
          this.setState({
              time:new Date()
            })
      },1*1000)
  }
  render() {
    return (
      <>
        <div className="Clock">

          <h3 id="time">{this.getTimeString()}</h3>
        </div>
      </>
    );
  }
}

export default App;
