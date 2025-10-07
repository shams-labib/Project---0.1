import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../utilitys/Function';
import { useLoaderData } from 'react-router';

const ReadList = () => {
    const [readList, setRaedList] = useState([]);

    const [sort, setSort] = useState("");
    const data = useLoaderData();

    useEffect(()=> {
        const storeBookData = getStoreBook();
        const Converted = storeBookData.map(id => parseInt(id));

        const myReadList = data.filter(book => Converted.includes(book.bookId));
        setRaedList(myReadList);
    },[])


    return (

        <div className='my-8'>
           {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
     Sort By : {}
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a>Ratings</a></li>
  <li><a>Pages</a></li>
</ul>
           <div className='mt-8'>
            
        <Tabs>
    <TabList>
      <Tab>Reading book list {readList.length}</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2></h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
           </div>
        </div>
    );
};

export default ReadList;