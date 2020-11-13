import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  getPadding(val) {
    let newVar;
    val < 10 ? (newVar = `0${val}`) : (newVar = val);
    return newVar;
  }
  getTimeString() {
    const time = new Date();
    const currHour = time.getHours();
    const currMinutes = this.getPadding(time.getMinutes());
    const currSeconds = this.getPadding(time.getSeconds());
    const amorpm = currHour > 12 ? `PM` : "AM";
    const newHour = currHour > 12 ? currHour - 12 : currHour;
    // console.log(newHour, currMinutes, currSeconds, amorpm);
    return `${newHour}:${currMinutes}:${currSeconds} ${amorpm}`;
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
