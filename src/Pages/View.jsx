import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addItemStore } from '../utilitys/Function';

const View = () => {

     const {id} = useParams();
     const IntParams = parseInt(id)

     const data = useLoaderData();

     const singleBook = data.find(book => book.bookId == IntParams);
     
     const handleBookRead = (id) =>{
               addItemStore(id)
     }



    return (
       <div className=' container mx-auto flex md:flex-row flex-col my-[100px] gap-10 p-7'>
            <div className='md:w-[50%] bg-gray-100 flex items-center justify-center rounded-2xl '>
        <img className='md:w-[400px] w-[300px]  md:h-[550px] h-[400px] my-10 rounded-2xl' src={singleBook.image} alt="" />
            </div>
            <div className='md:w-[50%] space-y-5'>
            <h1 className='text-4xl font-semibold'>{singleBook.bookName}</h1>
            <p className='border-b-1  border-gray-200 pb-4'>By : {singleBook.author}u</p>
            <p className='border-b-1  border-gray-200 pb-4'>{singleBook.category}</p>
            <p><span className='font-semibold'>Review : </span>{singleBook.review}</p>

            <div className='md:w-[50%] '>
                <div className='flex justify-between '>
                    <p className='font-bold'>Tag</p>
                    {
                        singleBook.tags.map((data, index) => <p key={index} className='text-green-500'>{data}</p>)
                    }
                </div>
            </div>
              <div className='border-b-1 border-gray-200 pb-4 w-fu'>
                </div>
                <div className='md:w-[50%] flex justify-between items-center'>
                      <p>Number Of Pages : </p>
                      <p className='font-bold'>{singleBook.totalPages}</p>
                </div>
                <div className='md:w-[50%] flex justify-between items-center'>
                      <p>Publisher : </p>
                      <p className='font-bold'>{singleBook.publisher}</p>
                </div>
                <div className='md:w-[50%] flex justify-between items-center'>
                      <p>Year of Publishing : </p>
                      <p className='font-bold'>{singleBook.yearOfPublishing}</p>
                </div>
                <div className='md:w-[50%] flex justify-between items-center'>
                      <p>Rating : </p>
                      <p className='font-bold'>{singleBook.rating}</p>
                </div>
                <div className='md:w-[50%] flex gap-5 items-center'>
                    <Link> <button onClick={()=> handleBookRead(id)} className='btn border-1 border-gray-300 px-7 py-5 bg-white'>Read</button></Link>
                     <button className='btn  py-5 px-7 bg-[#50B1C9] text-white'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default View;