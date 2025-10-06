import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const View = () => {

     const {id} = useParams();
     const IntParams = parseInt(id)



    const data = useLoaderData();
    return (
        <div>
            <h1>This is View Page</h1>
        </div>
    );
};

export default View;