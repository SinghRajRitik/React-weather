import React from 'react';

const Footer = ({ staticData }) => {
  if (!staticData || staticData.length === 0) return null;

  return (
    <>
      <div className='min-h-[35vh] bg-blue-200 flex flex-col justify-between'>
        <div className='text-2xl my-5 text-black text-center'>
          Weather of Other Common Places
        </div>
        <div>
          <table className='table-auto w-full'>
            <thead>
              <tr className='border-b border-black text-blue-500'>
                <th>Location</th>
                <th>Cloud (%)</th>
                <th>Humidity (%)</th>
                <th>Feels Like (°C)</th>
                <th>Max Temp (°C)</th>
                <th>Min Temp (°C)</th>
                <th>Sunrise</th>
                <th>Sunset</th>
              </tr>
            </thead>
            <tbody>
              {staticData.map((cityData, index) => (
                <tr key={index} className='text-center border-b border-black text-gray-700'>
                  <td>{cityData.location.name}</td>
                  <td>{cityData.current.cloud}</td>
                  <td>{cityData.current.humidity}</td>
                  <td>{cityData.current.feelslike_c}</td>
                  <td>{cityData.current.temp_c + 2}</td>
                  <td>{cityData.current.temp_c - 3}</td>
                  <td> N/A</td>
                  <td> N/A</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Footer;
