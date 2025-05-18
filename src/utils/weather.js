export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  // API 원시 데이터를 시간별 예보 형식으로 처리
  if (!weatherData) return [];

  /* const times = weatherData.hourly.time;
  const temperatures = weatherData.hourly.temperature_2m;
  const codes = weatherData.hourly.weather_code;
  구조분해할당을 활용하면 가독성이 좋아짐 */

  const { time, temperature_2m, weather_code } = weatherData.hourly;
  // weatherData.hourly 객체 안에서 time, temperature_2m, weather_code를 꺼내서 같은 이름의 변수로 한 번에 선언함
  const result = [];
  for (let i = 0; i < 12; i++) {
    /* const str = parseInt(times[i].slice(11, 13), 10) + "시";
    parseInt: 문자열을 정수로 바꿔주는 함수 */
    const str = new Date(time[i]).getHours() + "시"
    result.push({
      time: str,
      temperature: temperature_2m[i],
      code: weather_code[i],
    });
  }
  return result;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];

  /* const dates = weatherData.daily.time;
  const temperatures = weatherData.daily.temperature_2m_max;
  const codes = weatherData.daily.weather_code; */

  const { time: dates, temperature_2m_max: temperatures, weather_code: codes } = weatherData.daily;
  const result = [];
  for (let i = 0; i < 7; i++) {
    const dateObj = new Date(dates[i]);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const weekday = dateObj.toLocaleDateString("ko-KR", { weekday: "short" });
    const formatdate = `${month}월 ${day}일 (${weekday})`;
    result.push({
      date: formatdate,
      code: codes[i],
      temperature: temperatures[i],
    });
  }
  return result;
};
