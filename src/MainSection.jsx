import React, {use} from 'react';
import MainCard from "./MainCard";

const MainSection=({sentData}) => {
    
    const receiveData=use(sentData)
    console.log( receiveData )
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:mt-15   ">
            {
                receiveData.map(item => <MainCard item={item} key={item.id}></MainCard>  )
            }
        </div>
    );
};

export default MainSection;