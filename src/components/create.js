import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();
    // console.log(firstName);
    // console.log(lastName);

    const sendDataToApi = (e) => {
        e.preventDefault();
        axios.post('https://676a644e863eaa5ac0de3551.mockapi.io/crud',{
            firstName,
            lastName
        }).then(
            ()=> {
                navigate('/read')
            }
        )
    }
  return (
    <form className="ui form">
      <div className="field">
        <label style={{ display: "block", marginBottom: "8px" }}>First Name</label>
        <input type="text" name="firstName" 
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name" />
      </div>
      <div className="field">
        <label style={{ display: "block", marginBottom: "8px" }}>Last Name</label>
        <input type="text" name="lastName" 
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name" />
      </div>
      
      <button className="ui button" type="submit" 
      onClick={sendDataToApi}
      >
        Submit
      </button>
    </form>
  );
}
