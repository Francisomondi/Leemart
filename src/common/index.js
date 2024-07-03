const BackendDomain = "http://localhost:8000"

const summeryApi= {
    signUP:{
        url: `${BackendDomain}/api/signup`,
        method: "post"

    },
    signIn:{
        url: `${BackendDomain}/api/signin`,
        method: "post"
    },
    currentUser:{
        url: `${BackendDomain}/api/user-details`,
        method: "get"
    },
    signOut: {
        url: `${BackendDomain}/api/signout`,
        method: 'get'
    } ,
    Allusers: {
        url: `${BackendDomain}/api/all-users`,
        method: 'get'
    } ,
    updateUser: {
        url: `${BackendDomain}/api/update-user`,
        method: 'post'
    }  
}



export default summeryApi