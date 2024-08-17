import React from "react";
import DefaultLayout from '../layout/Default';

const PlantNew = () => {

    return (
        <DefaultLayout title={'Create a New plant'}>

            <form action="/plants" method="POST">
                <label> Name: <input type="text" name="name" /></label>
                <label>Color: <input type="text" name="color" /></label>
                <label>Is for Eat: <input type="text" name="For eat" /></label>
                <button><input type="submit" value="Create plant" /></button>

            </form>
        </DefaultLayout>
    );
};


export default PlantNew;