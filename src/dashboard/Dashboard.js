import React from "react";
import data from "../data.json";
import "./Dashboard.css";

const Dashboard = ({ user, logOut }) => {
  return (
    <div className="dashboard-container">
      <div className="heading">
        <h1>Employee Dashboard</h1>
        <p className="total-employee">total Employees : {data.length}</p>
        <p className="user">{user}</p>
        <button className="log-out" onClick={logOut}>
          Log Out
        </button>
      </div>
      <div className="box-container">
        {/* iterate over javascript array object */}
        {data.map((item) => {
          /* destructuring the object for usefull data variables  */
          const { id, name, gender, age, email, phoneNo } = item;
          return (
            <div key={id} className="box">
              <div className="employee-info">
                <h1>{name}</h1>
                <p>Gender: {gender}</p>
              </div>
              <p>Age: {age}</p>
              <p>{email}</p>

              <p>Phone: {phoneNo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
