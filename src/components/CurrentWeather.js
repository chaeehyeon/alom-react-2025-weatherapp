import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }

  let temperature = null; // let 값 변경 가능, 재선언 불가
  let code = null;
    if (weatherData && weatherData.hourly) {
    temperature = weatherData.hourly.temperature_2m[0];
    code = weatherData.hourly.weather_code[0];
  }
  // 실제 날씨 정보 꺼냄

  return (
    <div>
      <CurrentWeatherWrapper>
        <Temperature>{temperature}°C</Temperature>
        <WeatherCode>{getWeatherDescription(code)}</WeatherCode>
      </CurrentWeatherWrapper>
    </div>
  );
};

export default CurrentWeather;
