import React, { useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Trusha.css';
import countryList from 'react-select-country-list';
import Select from 'react-select';

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [extension, setExtension] = useState("");
  // eslint-disable-next-line
  const [image, setImage] = useState(null);
  // eslint-disable-next-line
  const [preview, setPreview] = useState(null);
  const [occupation, setOccupation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [description, setDescription] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    extension: "",
    occupation: "",
    jobTitle: "",
    joinDate: "",
    description: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    country: ""
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
      setPreview(URL.createObjectURL(img));
    }
  };

  const handleValidation = () => {
    let isValid = true;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      extension: "",
      occupation: "",
      jobTitle: "",
      joinDate: "",
      description: "",
      address1: "",
      address2: "",
      city: "",
      postalCode: "",
      country: ""
    };

    if (!name || name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
      isValid = false;
    }

    if (!email || !email.includes("@")) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!phone || phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!extension) {
      newErrors.extension = "Extension is required";
      isValid = false;
    }

    if (!occupation) {
      newErrors.occupation = "Occupation is required";
      isValid = false;
    }

    if (!jobTitle) {
      newErrors.role = "Job title is required";
      isValid = false;
    }

    if (!joinDate) {
      newErrors.joinDate = "Join date is required";
      isValid = false;
    }

    if (!description || description.length < 20) {
      newErrors.description =
        "Description must be at least 20 characters long";
      isValid = false;
    }

    if (!address1) {
      newErrors.address1 = "Address line 1 is required";
      isValid = false;
    }

    if (!city) {
      newErrors.city = "City is required";
      isValid = false;
    }

    if (!postalCode) {
      newErrors.postalCode = "Postal code is required";
      isValid = false;
    }

    if (!country) {
      newErrors.country = "Country is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // Handle form submission
      window.alert("Updated Successfully");
    }
  };

  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit}>
        <div className="form-section personal-details">
          <h2 className="personal-detail-heading">Personal Details</h2>
          <div className="personal-details-content">
            <div className="profile-image-container">
              <div className="profile-image">
                <label htmlFor="file-input">
                  <img src={require("./trusha.jpeg")} alt="logo" />
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="profile-image-label">Profile Photo</div>
            </div>
            <div className="form-group">
              <label className="personal-detail-heading">Name:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="error">{errors.name}</div>
              <label className="personal-detail-heading">Email:</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="error">{errors.email}</div>
              <label className="personal-detail-heading">Phone Number:</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="error">{errors.phone}</div>
              <label className="personal-detail-heading">Extension:</label>
              <input
                type="text"
                className="form-control"
                value={extension}
                onChange={(e) => setExtension(e.target.value)}
              />
              <div className="error">{errors.extension}</div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3 className="personal-detail-heading">Job Details</h3>
          <div className="form-group">
            <label className="personal-detail-heading">Occupation</label>
            <input
              type="text"
              className="form-control"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
            {errors.occupation && (
              <div className="error">{errors.occupation}</div>
            )}
          </div>
          <div className="form-group">
            <label className="personal-detail-heading">Job Title</label>
            <input
              type="text"
              className="form-control"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            {errors.role && <div className="error">{errors.role}</div>}
          </div>
          <div className="form-group">
            <label className="personal-detail-heading">Joining Date</label>
            <input
              type="date"
              className="form-control"
              value={joinDate}
              onChange={(e) => setJoinDate(e.target.value)}
            />
            {errors.joinDate && <div className="error">{errors.joinDate}</div>}
          </div>
          <div className="form-group">
            <label className="personal-detail-heading">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && (
              <div className="error">{errors.description}</div>
            )}
          </div>
        </div>
        <div className="form-section">
          <h3 className="personal-detail-heading">Address</h3>
          <div className="form-group">
            <label className="personal-detail-heading">Address Line 1</label>
            <input
              type="text"
              className="form-control"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
            {errors.address1 && <div className="error">{errors.address1}</div>}
          </div>
          <div className="form-group">
            <label className="personal-detail-heading">Address Line 2</label>
            <input
              type="text"
              className="form-control"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="personal-detail-heading">City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <div className="error">{errors.city}</div>}
          </div>
          <div className="form-group">
            <label className="personal-detail-heading">Postal Code</label>
            <input
              type="text"
              className="form-control"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            {errors.postalCode && (
              <div className="error">{errors.postalCode}</div>
            )}
          </div>
          <div className="form-group">
            <label className="personal-detail-heading">Country</label>
            <Select
              options={options}
              value={country}
              onChange={(option) => setCountry(option)}
            />
            {errors.country && <div className="error">{errors.country}</div>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
