import React, { useState } from "react";

function RegistrationForm({ onSubmit }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    mobileNo: "",
    gender: "male", // default to male
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      fullName: "",
      dob: "",
      address: "",
      mobileNo: "",
      gender: "male", // Reset gender to default
    });
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 4000);
  };

  return (
    <div className="form-field">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="logo">
          {isSubmit ? (
            <img src="/Images/tick.gif" width={70} alt="" />
          ) : (
            <img src="/Images/logo.png" width={70} alt="" />
          )}
        </div>
        <h2>Get Aadhar Details</h2>
        <label className="label" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <label className="label" htmlFor="dob">
          DOB
        </label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <label className="label" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <label className="label" htmlFor="name">
          Mobile No
        </label>
        <input
          type="tel"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          placeholder="Mobile No"
          required
          maxLength={10}
        />
        <label>Gender</label>
        <div className="flex-class">
          <div className="radio">
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              className="radio-class"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
          </div>
          <div className="radio">
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              className="radio-class"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
