import React from 'react'

const Card = ({weather}) => {


   if (!weather) return null;

 
  return (<>
    <div className='h-[55vh] bg-blue-200 flex flex-col justify-between'>
      <div className='my-5  text-center font-poppins text-2xl'>Weather for <span className='text-blue-500'>{weather.location.name}</span></div>


      <div className='flex'>
        <div className='h-[250px] w-[400px] bg-white border-2 border-gray-300 rounded-md shadow-md'>
          <div className='h-10 text-center text-2xl text-gray-600  bg-blue-400 rounded-md shadow-md'>
            <h4>Temperatures</h4>
          </div>
          <div className='text-center'>
            <p className='text-2xl p-4'>{ weather.current.temp_c} °C</p>
            <ul>
              <li>Temperature  { weather.current.temp_f}°F</li>
              <li>Max Temperature { weather.current.temp_c + 2}°C</li>
              <li>Min Temperature { weather.current.temp_c - 5}°C</li>
            </ul>
            <button className="h-10 w-[380px] my-[20px] border-2 border-blue-400 rounded-lg  text-gray-600 hover:text-white hover:bg-blue-600">Get Started</button>

          </div>
        </div>


        <div className='h-[250px] w-[400px] bg-white border-2 border-gray-300 rounded-md shadow-md'>
          <div className='h-10 text-center text-2xl text-gray-600  bg-blue-400 rounded-md shadow-md'>
            <h4>Humidity Info</h4>
          </div>
          <div className='text-center'>
            <p className='text-2xl p-4'>{weather.current.humidity} %</p>
            <ul>
              <li>Cloud PCT is { weather.current.cloud}</li>
              <li>Feel Like { weather.current.feelslike_c}</li>
              <li>Humidity {weather.current.humidity}</li>
            </ul>
            <button className="h-10 w-[380px] my-[20px] border-2 border-blue-400 rounded-lg  text-gray-600 hover:text-white hover:bg-blue-600">Contect Us!</button>

          </div>
        </div>




        <div className='h-[250px] w-[400px] bg-white border-2 border-gray-300 rounded-md shadow-md'>
          <div className='h-10 text-center text-2xl text-gray-600  bg-blue-400 rounded-md shadow-md'>
            <h4>Wind Info</h4>
          </div>
          <div className='text-center'>
            <p className='text-2xl p-4'>{weather.current.wind_kph} Km/hr</p>
            <ul>
              <li>Wind Degree is { weather.current.wind_degree}</li>
              <li>Wind Direction is {weather.current.wind_dir}</li>
              <li>UV Index is {weather.current.uv}</li>
            </ul>
            <button className="h-10 w-[380px] my-[20px] border-2 border-blue-400 rounded-lg  text-gray-600 hover:text-white hover:bg-blue-600">Sign Up for Free</button>

          </div>
        </div>
      </div>

    </div></>

  )
  console.log(props.weather);
  
}

export default Card