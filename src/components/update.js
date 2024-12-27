import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ID, setID] = useState(null);
    const navigate = useNavigate();
    const sendDataToApi = (e) => {
        e.preventDefault(); 
        if (ID) {
            axios.put(`https://676a644e863eaa5ac0de3551.mockapi.io/crud/${ID}`, {
                firstName,
                lastName
            })
            .then(response => {
                navigate('/read')
                console.log("Update successful:", response.data);
                alert("Data updated successfully!");
            })
            .catch(error => {
                console.error("Error updating data:", error);
                alert("Failed to update data.");
            });
        } else {
            alert("Invalid ID. Cannot update.");
        }
    };

    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setID(localStorage.getItem("ID"));
    }, []);

    return (
        <form className="ui form">
            <div className="field">
                <label style={{ display: "block", marginBottom: "8px" }}>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
            </div>
            <div className="field">
                <label style={{ display: "block", marginBottom: "8px" }}>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                />
            </div>

            <button
                className="ui button"
                type="submit"
                onClick={sendDataToApi}
            >
                Update
            </button>
        </form>
    );
}
