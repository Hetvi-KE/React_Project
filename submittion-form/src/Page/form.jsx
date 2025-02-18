import { useState, useEffect } from "react";
import "./Form.css"; // Ensure styling for a better UI
import Video from '../Page/bg-video.mp4'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: [],
    resume: null,
    url: "",
    choice: "",
    about: "",
  });

  // ✅ Load saved data from Local Storage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // ✅ Save form data to Local Storage whenever formData changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        subjects: checked
          ? [...prev.subjects, value]
          : prev.subjects.filter((sub) => sub !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log("Form Data Submitted:", formData);
  };

  const handleReset = () => {
    localStorage.removeItem("formData"); // ❌ Clear localStorage
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subjects: [],
      resume: null,
      url: "",
      choice: "",
      about: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Form in React</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name*</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          required
        />


        {/* add the video link :*/}
        <video src={Video} className="video-bg"> </video>
        <label>Last Name*</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          required
        />

        <label>Enter Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />

        <label>Contact*</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter Mobile number"
          required
        />

        <label>Gender*</label>
        <div className="radio-group">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === "Other"}
            onChange={handleChange}
          />
          Other
        </div>

        <label>Your best Subject</label>
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="subjects"
            value="English"
            checked={formData.subjects.includes("English")}
            onChange={handleChange}
          />
          English
          <input
            type="checkbox"
            name="subjects"
            value="Maths"
            checked={formData.subjects.includes("Maths")}
            onChange={handleChange}
          />
          Maths
          <input
            type="checkbox"
            name="subjects"
            value="Physics"
            checked={formData.subjects.includes("Physics")}
            onChange={handleChange}
          />
          Physics
        </div>

        <label>Upload Resume*</label>
        <input type="file" name="resume" onChange={handleChange} required />

        <label>Enter URL*</label>
        <input
          type="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Enter URL"
          required
        />

        <label>Select your choice</label>
        <select name="choice" value={formData.choice} onChange={handleChange}>
          <option value="">Select your Ans</option>
          <option value="Option1">Web Development</option>
          <option value="Option2">UI/UX Design</option>
          <option value="Option3">Software Development</option>
        </select>

        <label>About</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="About yourself"
        ></textarea>

        <div className="btn-group">
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
