import React from 'react';
import img from '../assets/books-uFubBlot.jpg'

const Banner = () => {
    return (
        <div className='bg-gray-100 rounded-2xl  my-10 flex justify-between items-center gap-2 p-[100px] '>
           <div className='w-[50%]'>
            <h1 className='text-6xl font-semibold'>Books to freshen up your bookshelf</h1>
            <button className='btn bg-green-500 px-5 py-5 text-white font-semibold mt-8 rounded-xl'> View Details</button>
           </div>
            <div className='w-[50%]'>
                <img className='rounded-xl' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;