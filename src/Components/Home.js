import React, { useEffect, useState} from 'react'
import Blog from './bloglist';
import useFetch from './useFetch'

const Home = () => {      
     const {data, isPending, error} = useFetch('http://localhost:8000/blogs')

     return ( 
        <>
            <div className = 'container home'>
                <h2 className= 'title'>Header</h2>
                <button className = 'btn'>Click Me</button>
            </div>

            <div className = 'container'>
                {error && <span>{error}</span>}
                {isPending && <div>Loading...</div>}
                {data &&  <Blog blogs = {data} />}
            </div>
        </>
     );
}
 
export default Home;