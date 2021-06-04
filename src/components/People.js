import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
}

const People = ()=>{
    const { data, status } =  useQuery('people', fetchPeople);
    console.log(data);

    return(
        <div>
            <h2>Personas, Personas, Personas</h2>
            {status === 'loading' && (
                <div>Loading unadulterated loading ....</div>
            )}

            {status === 'errpr' && (
                <div>No hay Personas</div>
            )}

            {status === 'success' && (
                <div>
                    { data.results.map(person => <Person key={person.name} person={person}/>)}
                </div>
            )}
            
        </div>
    );
}

export default People;