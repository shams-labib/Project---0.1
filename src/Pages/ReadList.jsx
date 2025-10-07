import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../utilitys/Function';
import Read from './Read';


const ReadList = () => {

  const [readList, setReadList] = useState([]);
  console.log(readList)
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  
  useEffect(()=> {
    const getData = getStoreBook();
    const Converted = getData.map(id=> parseInt(id));

    const mainData = data.filter(book => Converted.includes(book.bookId));
    setReadList(mainData);
  },[])


  return (
    <div>
      <h1>This is Readlist  {readList.length}</h1>

      <div>
         <Tabs>
    <TabList>
      <Tab>ReadList</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2>Books i read</h2>
       <div>
        {
          readList.map((singleBook, index) =><Read key={index} singleBook={singleBook}></Read>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Added WishList</h2>
    </TabPanel>
  </Tabs>
      </div>
    </div>
  );
};

export default ReadList;<h1>This is Readlist</h1>