import axios from 'axios'
const ls = require('local-storage')

let getScrapedResults = async (query,location) =>{
    try {
        let response = await axios.post('http://localhost:3001/api/sjobs',{
            query : query,
            location: location
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
    
}

let registerUser = async (firstname,lastname,email,password,role) =>{
    try {
        console.log("here i am")

        let response = await axios.post('http://localhost:3001/api/accounts/auth/register',{
            firstname : firstname,
            lastname: lastname,
            email : email,
            password : password,
            role : role
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
    
}


let loginUser = async (email,password) =>{
    try {
         
        console.log("here in LOGIN")

        let response = await axios.post('http://localhost:3001/api/accounts/auth/login',{
            
            email : email,
            password : password,
            
        })
        return response
    } catch (error) {
        console.log(error)
    }
    
}


let getUser = async (id) =>{
    try {
        let response = await axios.get(`http://localhost:3001/api/users/getone/${id}`,{
            headers:{
                'auth-token':ls.get('token')
            }
        })
        return response
    } catch (error) {
        console.log(error)
    }
    
}

let updateUser = async (id) =>{
    try {
        console.log("here in updateuser")
        let response = await axios.post(`http://localhost:3001/api/users/update/${id}`,{
            
           
            
        })
        return response
    } catch (error) {
        console.log(error)
    }
    
}

let postJob = async (company,title,category,selectLocation,jobPrimer,selectedHires,contractType,lowerSalary,upperSalary,description,skills) =>{
    try {

        let response = await axios.post('http://localhost:3001/api/rjobs/postJob', {
            company: company,
            title:title,
            category:category,
            selectLocation:selectLocation,
            jobPrimer:jobPrimer,
            selectedHires:selectedHires,
            contractType:contractType,
            upperSalary:upperSalary,
            lowerSalary:lowerSalary,
            description:description,
            skills:skills
        },
        {
            headers:{
                'auth-token':ls.get('token')
            },
        }
            
        )
      
        console.log("response of post jobs : ",response)

        return response.data
    } catch (error) {
        console.log(error)
    }
    
}
let getJobs = async () =>{
    try {
        console.log("here i am in get job")

        let response = await axios.get('http://localhost:3001/api/rjobs')

        return response.data
    } catch (error) {
        console.log(error)
    }
    
}
let createCV = async (experience,firstName,lastName,profession,city,state,zipcode,phone,email,education,workHistory,summary) =>{
    try {
        let response = await axios.post('http://localhost:3001/api/cv/createCV',{
            experience : experience,
            firstName: firstName,
            lastName : lastName,
            profession: profession,
            city : city,
            state:state,
            zipcode:zipcode,
            phone : phone,
            email : email,
            education : education,
            workHistory : workHistory,
            summary : summary
        },
        {
            headers:{
                'auth-token':ls.get('token')
            },
        })
        console.log("response : ",response)

        return response.data
    } catch (error) {
        console.log(error)
    }
    
}


export{
    getScrapedResults,
    registerUser,
    loginUser,
    getUser,
    updateUser,
    postJob,
    getJobs,
    createCV
    
}