import axios from "axios";
import { useState, useEffect } from "react";
const About = () => {
  const [data, setdata] = useState("");

  useEffect(() => {
    const User_data = async () => {
      const response = await axios.get("http://localhost:3000/user", {
        withCredentials: true,
      });
      if (response) {
        console.log(response);
        setdata(response.data?.user_id);
      } else {
        throw new Error("users does not Exist!");
      }
    };
    User_data(); //function call
  },[]);

  const handlclick = async () => {
    const response = await axios.post("http://localhost:3000/logout", {},{
        withCredentials:true
    }
    );
    if (response) {
      alert(response.data);
      setdata("")
    }
  };
  return (
    <div>
      <h2>Get the user data</h2>
      <p>userId : {data}</p>
      <button onClick={handlclick}>Logout</button>
    </div>
  );
};
export default About;
