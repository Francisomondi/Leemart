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
    },
    uploadProduct: {
        url: `${BackendDomain}/api/upload-product`,
        method: 'post'
    },
    allProduct: {
        url: `${BackendDomain}/api/get-product`,
        method: 'get'
    },
    updateProduct: {
        url: `${BackendDomain}/api/update-product`,
        method: 'post'
    },
    productCategory : {
        url: `${BackendDomain}/api/getProductCategory`,
        method: 'post'
    }
    


    
}



export default summeryApi