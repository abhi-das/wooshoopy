
const fetchWeatherForcast = async => {

    const response = await fetch("https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22");
    const data = await response.json();

    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
}

export { fetchWeatherForcast };