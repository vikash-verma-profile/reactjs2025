import React  from "react";
import { Createuser } from "./api/api";

const AddUser:React.FC=()=>{
    const handleAddUser=async()=>{
        const newUser={name:"Vikash Verma",email:"vikash@test.com"};
        const created=await Createuser(newUser);

        if(created){
            alert(`User created : ${created.name}`);
        }
    }

    return <button onClick={handleAddUser}>Add User</button>
}

export default AddUser;