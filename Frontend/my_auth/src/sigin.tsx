import axios from "axios";
import { useState } from "react";
const Home = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <input
        type="Email"
        placeholder="Enter the email"
        name="email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Enter the password"
        name="email"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        type="submit"
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:3000/sigin",
            {
              email: email,
              password: password,
            },
            {
              withCredentials: true,
            }
          );
          alert(response.data?.msg);
        }}
      >
        submit
      </button>

      <div>
        <p>email: {email}</p>

        <p>password: {password}</p>
      </div>
    </div>
  );
};

export default Home;
