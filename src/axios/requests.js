import axios from 'axios'

let getResults = async (query,location) =>{
    try {
        console.log("here i am")
        let response = await axios.post('http://localhost:3001/api/sjobs',{
            query : query,
            location: location
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
    
}

let getpostedjobs = async (query,location) =>{
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

export{
    getResults,
    getpostedjobs
}