type ProfileDetailProps={
    name:string;
    age:number;
}

const ProfileDetails:React.FC<ProfileDetailProps>=({name,age})=>{
    return <p>{name} is {age} years old.</p>
}

const Profile:React.FC=()=>{
    return(
        <div>
            <h2>User Profile</h2>
            <ProfileDetails name="Vikash" age={25} />
        </div>
    )
}

export default Profile;