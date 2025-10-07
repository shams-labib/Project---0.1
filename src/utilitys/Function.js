
const getStoreBook = ()=>{
    const storeBook = localStorage.getItem('readList');
    if(storeBook){
        const stroreBookData = JSON.parse(storeBook);
        return stroreBookData;
    }
}

const addItemStore = (id)=>{
      const storeData = getStoreBook();
      if(storeData){
        alert('This data is already available')
      }else{
         storeData.push(id);
         const data = JSON.stringify(storeData);
         localStorage.setItem("ReadLisr", data);
      }
}

export{addItemStore, getStoreBook}