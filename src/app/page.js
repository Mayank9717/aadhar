"use client";
import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import AadharCard from "./components/AadharCard";
import { generateUID } from "./uidUtils";

function App() {
  const [userData, setUserData] = useState(null);
  const [uid, setUID] = useState(null);

  const handleSubmit = (data) => {
    const generatedUID = generateUID();
    setUserData(data);
    setUID(generatedUID);
  };

  return (
    <div className="container">
      <div className="form">
        <RegistrationForm onSubmit={handleSubmit} />
        {userData ? (
          <AadharCard userData={userData} uid={uid} />
        ) : (
          <>
            <img src="/Images/logo.png" alt="logo" className="aadhar-logo" />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
