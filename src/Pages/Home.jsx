import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from './Banner';
import Book from './Book';

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
           <Banner></Banner>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
            {
            data.map((book, index)=> <Book key={index} singleBook={book}></Book>)
           }
           </div>
        </div>
    );
};

export default Home;