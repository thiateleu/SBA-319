
import React from "react";
import DefaultLayout from  "../layout/Default";

const PlantEdit = ({plant}) => {
    return (
        <DefaultLayout title={'Edit ${plant.name}'}>
        <form action={"/plants/${plant._id}?_method=PUT"} method="POST">
       <label>Name: <input type="text" name="name" defaultValue={plant.name} /></label> 
       <label> Color: <input type="text" name="color" defaultValue={plant.color} /></label> 
       <label> Is for eat: <input type="text" name="for eat" defaultValue={plant.ForEat} /></label> 
       <button><input type="submit" value="Submit Changes" /></button>

    </form>
</DefaultLayout>
);
};


export default PlantEdit;
