import React from 'react';
import DefaultLayout from '../layout/Default';

const PlantIndex = ({plants}) => {
    return (
        <DefaultLayout title="plants">
            <ul>
                {plants.map((plant) => (
                    <li key={plant._id}>
                        <a href={'/plants/${plant._id}'}></a>

                    </li>
               ))}
            </ul>
            <a href='/plants/new'Create New plant></a>
        </DefaultLayout>
    );
};


export default PlantIndex;