import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSamaryCard from '../../Shared/NewsSamaryCard/NewsSamaryCard';

const Home = () => {
    const data=useLoaderData();
    console.log("All News ARe:",data);
    return (
        <div>
            {
                data.map(snews=><NewsSamaryCard
                
                    key={snews._id}
                    summaryNews={snews}
                
                />)
            }
        </div>
    );
};

export default Home;