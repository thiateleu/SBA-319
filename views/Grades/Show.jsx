import React from  "react";
import DefaultLayout from "../layout/Default";

const GradeShow = ({grade}) => {
  return (
 <DefaultLayout title={grade.name}>
    <h1>{grade.studentName}</h1>
    <p>Type: {grade.type}</p>
    <a href={"/grades/${grade._id}/edit"}>Edit</a>
  </DefaultLayout>
  );
};

export default GradeShow;