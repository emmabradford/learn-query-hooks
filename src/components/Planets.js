import React from 'react';
import { useQuery } from 'react-query';

const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json();
}
const Planets = ()=>{
    const { data, status } = useQuery('planets', fetchPlanets);
    console.log(data);

    return(
        <div>
            <h2>Planetas, Planetas, Planetas</h2>
            {status==='loading' && (
                <div>Loading unadulterated loading...</div>
            )}
            {status==='error' && (
                <div>no hay planetas</div>
            )}
            {status === 'success' &&(
                <div>
                    {data.results.map(planet =>)}
                </div>
            )}
        </div>
    );
}

export default Planets;