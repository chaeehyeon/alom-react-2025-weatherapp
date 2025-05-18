import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  return (<div>
    <HourlyForecastWrapper>
      {hourlyData.map((item, index) => (
        <HourlyItem key={index}>
          <div>{item.time}</div>
          <div>{item.temperature}°C</div> 
          <div>{getWeatherDescription(item.code)}</div>
        </HourlyItem>
      ))}
    </HourlyForecastWrapper>
  </div>);
};
// map(요소,순서): 배열의 각 요소를 하나씩 꺼내서 새로운 배열로 만들어줌, JSX 형태로 바꿔줌
export default HourlyForecast;
