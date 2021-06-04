import React from 'react';

const Person = ({ person }) => {
    return(
        <div>
            <h2>{ person.name }</h2> 
            <p>Gender: {person.gender}</p>
            <p>Birth Year: {person.birth_year}</p> 
        </div>
    );
}

export default Person;