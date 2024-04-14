const DOM = (function () {
  // Current DOM
  const currLocation = document.querySelector('h1');
  const currDate = document.querySelector('h3');
  const currWeather = document.querySelector('.current-weather');
  const currTemp = document.querySelector('.current-temp');
  const currImg = document.querySelector('.current-image');

  // Future DOM
  const futureWeather1 = document.querySelector('.future-1-weather');
  const futureTemp1 = document.querySelector('.future-1-temp');
  const futureWeather2 = document.querySelector('.future-2-weather');
  const futureTemp2 = document.querySelector('.future-2-temp');
  const futureWeather3 = document.querySelector('.future-3-weather');
  const futureTemp3 = document.querySelector('.future-3-temp');
  const futureWeather4 = document.querySelector('.future-4-weather');
  const futureTemp4 = document.querySelector('.future-4-temp');
  const futureWeather5 = document.querySelector('.future-5-weather');
  const futureTemp5 = document.querySelector('.future-5-temp');
  const futureWeather6 = document.querySelector('.future-6-weather');
  const futureTemp6 = document.querySelector('.future-6-temp');
  
  return {
    currLocation,
    currDate,
    currWeather,
    currTemp,
    currImg,
    futureWeather1,
    futureTemp1,
    futureWeather2,
    futureTemp2,
    futureWeather3,
    futureTemp3,
    futureWeather4,
    futureTemp4,
    futureWeather5,
    futureTemp5,
    futureWeather6,
    futureTemp6
  }
})()

const getLocation = (function() {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const getInput = () => {
      return document.querySelector('input').value;
    }

    const location = getInput()

    return weatherApi.getWeather(location);
  });
})();

const weatherApi = (function() {
  API_KEY = '92e7d4ee162943e89f8163055241304'

  async function getWeather(loc) {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${loc}&aqi=no`);

    res.json().then(function(res) {
      DOM.currLocation.innerHTML = res.location.name
      DOM.currDate.innerHTML = res.location.localtime
      DOM.currWeather.innerHTML = res.current.condition.text
      DOM.currTemp.innerHTML = `${res.current.feelslike_c}°C`
      DOM.currImg.src = res.current.condition.icon.split('//cdn.weatherapi.com/')[1]
      // DOM
      console.log(res.current.condition.icon)
    })
  }

  return {
    getWeather
  }
})();

weatherApi.getWeather('Cracow');