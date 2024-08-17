import React from "react";
import DefaultLayout from  "../layout/Default";

const GradeEdit = ({grade}) => {
    return (
        <DefaultLayout title={'Edit ${grade.name}'}>
        <form action={"/grades/${grade._id}?_method=PUT"} method="POST">
       <label>StudentName: <input type="text" name="studentName" defaultValue={grade.studentname} /></label> 
       <label> Type: <input type="text" name="type" defaultValue={grade.type} /></label> 
       <label> Score: <input type="text" name="score" defaultValue={grade.score} /></label> 
       <button><input type="submit" value="Submit Changes" /></button>

    </form>
</DefaultLayout>
);
};


export default GradeEdit;
