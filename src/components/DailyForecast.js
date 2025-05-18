import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return (<div>
    <DailyForecastWrapper>
      {dailyData.map((item,index)=>(
        <DailyItem key={index}>
          <div>{item.date}</div>
          <div>{getWeatherDescription(item.code)}</div>
          <div>{item.temperature}°C</div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  </div>);
};

export default DailyForecast;
