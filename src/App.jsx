import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const API_KEY = import.meta.env.VITE_API_KEY;



  const [weather, setWeather] = useState(null);

  const [location, setlocation] = useState('New Delhi')




  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Fetched weather data:", data);

      setWeather(data);



    } catch (error) {
      console.error("Error fetching weather data:", error);
      toast.error("Location not found");
      
    }
  };

  useEffect(() => {
    if (location.trim() !== "") {
      fetchData();
    }
  }, [location]);

  const handleSearch = (SearchText) => {
    console.log("search recieved from Navbar:", SearchText);

    setlocation(SearchText);
  };



  return (
    <>
      <NavBar onTextChange={handleSearch} />
      <Card weather={weather} />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />

    </>
  );
}

export default App;
