import { useState, useEffect, useCallback } from "react";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const staticCities = ['Varanasi', 'Lucknow', 'Kanpur', 'Mirzapur'];

  const [weather, setWeather] = useState({ search: null, static: [] });
  const [location, setlocation] = useState('New Delhi');

  const fetchData = async (city) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  };

  const updateWeatherData = useCallback(async () => {
    try {
      const searchData = await fetchData(location);

      const staticDataArray = await Promise.all(
        staticCities.map(city => fetchData(city))
      );

      setWeather({
        search: searchData,
        static: staticDataArray,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      toast.error("Location not found");
    }
  }, [location]);

  useEffect(() => {
    if (location.trim() !== "") {
      updateWeatherData();
    }
  }, [updateWeatherData]);

  const handleSearch = (SearchText) => {
    console.log("search received from Navbar:", SearchText);
    setlocation(SearchText);
  };

  return (
    <>
      <NavBar onTextChange={handleSearch} />
      <Card weather={weather.search} />
      <Footer staticData={weather.static} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
