import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import Clock from "react-live-clock";

export default function TimeAndDetails() {

// const sunrise = new Date(forecast.sys.sunrise * 1000);
// const sunset = new Date(forecast.sys.sunset * 1000);
// console.log(sunrise);
// console.log(sunset);
// console.log(sunrise.getHours());
// console.log(sunset.getHours());
var time =new Date();
const dateAndDetail = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
};
  return (
    <>
    <Wrapper>
    <Time>
    <div>{time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })},</div>
   

    </Time>
    <div className="current-date">{dateAndDetail(new Date())}</div>
   
    </Wrapper>
</>
    
  )
}
const Wrapper=styled.div`
margin: 20px 0;
display: flex;
justify-content: center;
 


`
const Time= styled.div`
 margin-right: 10px;
//  float: left;
//  text-align: left;
//  position: absolute;

`