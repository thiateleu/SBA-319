import React from 'react';
import DefaultLayout from '../layout/Default';

const UserIndex = ({users}) => {
    return (
        <DefaultLayout title="Users">
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <a href={'/users/${user._id}'}></a>

                    </li>
               ))}
            </ul>
            <a href='/users/new'Create New User></a>
        </DefaultLayout>
    );
};


export default UserIndex;