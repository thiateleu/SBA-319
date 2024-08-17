import React from "react";
import DefaultLayout from '../layout/Default';

const GradeNew = () => {

    return (
        <DefaultLayout title={'Create a New grade'}>

            <form action="/grades" method="POST">
                <label> StudentName: <input type="text" name="studentName" /></label>
                <label>Type: <input type="text" name="type" /></label>
                <label>Score: <input type="text" name="score" /></label>
                <button><input type="submit" value="Create grade" /></button>

            </form>
        </DefaultLayout>
    );
};


export default GradeNew;