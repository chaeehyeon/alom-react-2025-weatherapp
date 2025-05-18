import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const getCurrentIndex = (timeArray) =>{
  const now = new Date();
  return timeArray.findIndex((t)=>new Date(t)>now)-1;
};

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }
  /* 스켈레톤 컴포넌트 적용해보기 */
  let temperature = null; // let 값 변경 가능, 재선언 불가
  let code = null;

    if (weatherData && weatherData.hourly) {
      const timeArray=weatherData.hourly.time;
      const idx=getCurrentIndex(timeArray);
      if(idx>=0){
    temperature = weatherData.hourly.temperature_2m[idx];
    code = weatherData.hourly.weather_code[idx];
  }}
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