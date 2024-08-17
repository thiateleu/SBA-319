import React from  "react";
import DefaultLayout from "../layout/Default";

const PlantShow = ({plant}) => {
  return (
 <DefaultLayout title={plant.name}>
    <h1>{plant.name}</h1>
    <p>Color: {plant.color}</p>
    <a href={"/plants/${plant._id}/edit"}>Edit</a>
  </DefaultLayout>
  );
};

export default PlantShow;