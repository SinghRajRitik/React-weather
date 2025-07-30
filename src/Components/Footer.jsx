import React from 'react'

const Footer = () => {
  return ( <>
    <div className='h-[35vh] bg-blue-200 flex flex-col justify-between'>
        <div className='text-2xl my-5 text-black text-center'>Weather of Other Common Places</div>
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr className='border-b border-black text-blue-500'>
                        <th>Locations</th>
                        <th>Cloud_ppt</th>
                        <th>Humidity</th>
                        <th>Feels Like</th>
                        <th>Max_temp</th>
                        <th>Min_temp</th>
                        <th>Sunrise</th>
                        <th>sunset</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className='text-center border-b  border-black'>
                        <th>Varanasi</th>
                        <td>0</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr className='text-center border-b  border-black'>
                        <th>Kanpur</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr className='text-center border-b  border-black'>
                        <th>Lucknow</th>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                    <tr className='text-center border-b  border-black'>
                        <th>Mirzapur</th>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Footer