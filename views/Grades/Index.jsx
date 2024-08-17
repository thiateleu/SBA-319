import React from 'react';
import DefaultLayout from '../layout/Default';

const GradeIndex = ({grades}) => {
    return (
        <DefaultLayout title="grades">
            <ul>
                {grades.map((grade) => (
                    <li key={grade._id}>
                        <a href={'/grades/${grade._id}'}></a>

                    </li>
               ))}
            </ul>
            <a href='/grades/new'Create New grade></a>
        </DefaultLayout>
    );
};


export default GradeIndex;