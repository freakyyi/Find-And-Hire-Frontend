import axios from "axios";
const ls = require("local-storage");

let getScrapedResults = async (query, location) => {
  try {
    let response = await axios.post("http://localhost:3001/api/sjobs", {
      query: query,
      location: location,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

let registerUser = async (firstname, lastname, email, password, role) => {
  try {
    console.log("here i am");

    let response = await axios.post(
      "http://localhost:3001/api/accounts/auth/register", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        role: role,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

let loginUser = async (email, password) => {
  try {
    console.log("here in LOGIN");

    let response = await axios.post(
      "http://localhost:3001/api/accounts/auth/login", {
        email: email,
        password: password,
      }
    );
    console.log("login respinse"+ response.data)
    return response;
  } catch (error) {
    console.log(error);
  }
};

let getUser = async (id) => {
  try {
    let response = await axios.get(
      `http://localhost:3001/api/users/getone/${id}`, {
        headers: {
          "auth-token": ls.get("token"),
        },
      }
    );
    console.log("getting user from getUser API :" , response);

    return response;
  } catch (error) {
    console.log(error);
  }
};


/// UPDATING USER As Role
let updateUserAsRole = async (id,body) => {
  try {
    console.log("here in updateuser as Role");
    console.log('body',body)

    let response = await axios.put(
      `http://localhost:3001/api/users/update/${id}`,body, {
        headers: {
          "auth-token": ls.get("token"),
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

/// UPDATING USER As Main
let updateUser = async (id,body) => {
  try {
    console.log("here in updateuser as MAIN");
    console.log('body',body)
    let response = await axios.put(
      `http://localhost:3001/api/users/updateInUser/${id}`,body, {
        headers: {
          "auth-token": ls.get("token"),
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
let postJob = async (
  company,
  title,
  category,
  selectedLocation,
  jobPrimer,
  selectedHires,
  contractType,
  lowerSalary,
  upperSalary,
  description,
  skills
) => {
  try {
    let response = await axios.post(
      "http://localhost:3001/api/rjobs/postJob", {
        company: company,
        title: title,
        category: category,
        selectedLocation: selectedLocation,
        jobPrimer: jobPrimer,
        selectedHires: selectedHires,
        contractType: contractType,
        upperSalary: upperSalary,
        lowerSalary: lowerSalary,
        description: description,
        skills: skills,
      }, {
        headers: {
          "auth-token": ls.get("token"),
        },
      }
    );
    if(response.data.errors === null) {
      console.log("Error occured in Post Job Form");
    }
    else {
      console.log("response of post jobs : ", response);
      return response.data;
    }


  } catch (error) {
    console.log(error);
  }
};
let getJobs = async () => {
  try {
    console.log("here i am in get job");

    let response = await axios.get("http://localhost:3001/api/rjobs");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};



let createCV = async (
  experience,
  firstName,
  lastName,
  profession,
  city,
  state,
  zipcode,
  phone,
  email,
  education,
  workHistory,
  skills,
  summary
) => {
  try {
    let response = await axios.post(
      "http://localhost:3001/api/cv/createCV", {
        experience: experience,
        firstName: firstName,
        lastName: lastName,
        profession: profession,
        city: city,
        state: state,
        zipcode: zipcode,
        phone: phone,
        email: email,
        education: education,
        workHistory: workHistory,
        skills: skills,
        summary: summary,
      }, {
        headers: {
          "auth-token": ls.get("token"),
        },
      }
    );
    
    if(response.data.errors !== null) {
      console.log("Error occured in CV Form while submission")
      return
    }
    else if(response.status === "403" || response.status === 403 ) {
      console.log("You already have a CV")
      return
    }
      console.log("CV Response : ", response);
      return response.data;
    
    

    // console.log("response when there is error in anywhere :" ,response.data)
  } catch (error) {
    console.log("Error occured in CV " + error);
    
  }

};

let getCV = async (id) => {
  try {
    let response = await axios.get(
      `http://localhost:3001/api/cv/getCV/${id}`, {
        headers: {
          "auth-token": ls.get("token"),
        },
      }
    );
    // if(response.data.errors !== null) {
    //   console.log("CV is already Present")
    // }
    // else {
    //   console.log("CV Response : ", response);
    //   return response.data;
    // }
    console.log("CV Response : ", response);
    return response.data;
    
    
  } catch (error) {
    console.log(error);
  }
};

export {
  
  getScrapedResults,
  registerUser,
  loginUser,
  getUser,
  updateUserAsRole,
  updateUser,
  postJob,
  getJobs,
  createCV,
  getCV
};