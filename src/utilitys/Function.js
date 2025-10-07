
const getStoreBook = ()=>{
    const storeBookSTR = localStorage.getItem("readlist");

    if(storeBookSTR){
          const storeBookdata = JSON.parse(storeBookSTR)
          return storeBookdata
    } else{
        return []
    }
}

const addItemStore = (id)=>{
            
    const storeBookData = getStoreBook();
    if(storeBookData.includes(id)) {
        alert('Id is already Available')
    } else{
        storeBookData.push(id)
      
         const data = JSON.stringify(storeBookData);
         localStorage.setItem('readlist', data)
    }
}

export{addItemStore ,getStoreBook}