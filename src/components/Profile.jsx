import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


function Profile(){
  const {user, isAuthenticated, isLoading}=useAuth0();

  if(isLoading){
    return <div>Loading...</div>
  }

  return(
    isAuthenticated &&(
      <div className='h-5 w-auto flex items-center justify-center cursor-pointer ml-5'>
        <img className="w-10 h-10 mr-4 rounded-full" src={user.picture} alt={user.name} />
        <div className='flex-col item-center justify-center font-quantico font-extrabold text-slate-100 '>
        <h2 className="text-lg">{user.name}</h2>
        <p className="text-xs">{user.email}</p>
        </div>
      </div>

      
    )
  )
}

export default Profile;