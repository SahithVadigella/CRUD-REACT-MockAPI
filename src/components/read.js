import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://676a644e863eaa5ac0de3551.mockapi.io/crud")
      .then((getData) => {
        setApiData(getData.data);
      });
  });
  const setID = (id) => {
    console.log(id);
    localStorage.setItem("ID", id);
  };

  const getData = () => {
    axios
      .get("https://676a644e863eaa5ac0de3551.mockapi.io/crud")
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios.delete(`https://676a644e863eaa5ac0de3551.mockapi.io/crud/${id}`)
    .then(
        ()=>{
            getData();
        }
    )
  }
  return (
    <div>
      <table class="ui celled table">
        <thead>
          <tr>
            <th style={{ margin: 40, padding: 25 }}>Ser. num</th>
            <th style={{ margin: 40, padding: 25 }}>FirstName</th>
            <th style={{ margin: 40, padding: 25 }}>LastName</th>
            <th style={{ margin: 40, padding: 25 }}>Update</th>
            <th style={{ margin: 40, padding: 25 }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => {
            return (
              <tr>
                <td data-label="id" style={{ margin: 40, padding: 30 }}>
                  {data.id}
                </td>
                <td data-label="fName" style={{ margin: 40, padding: 30 }}>
                  {data.firstName}
                </td>
                <td data-label="lName" style={{ margin: 40, padding: 30 }}>
                  {data.lastName}
                </td>
                <td data-label="update">
                  <Link to="/update">
                    <button
                      style={{ color: "green" }}
                      onClick={() => setID(data.id)}
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td data-label="delete">
                  
                    <button style={{ color: "red" }}
                    onClick={() => onDelete(data.id)}>Delete</button>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
