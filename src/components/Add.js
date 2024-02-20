import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Add() {
    const [studentName, setStudentName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [course, setCourse] = useState("");
    const [courseMethod, setCourseMethod] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [country, setCountry] = useState("");
    const [profile, setProfile] = useState("");
    const [preview, setpreview] = useState("")
    const [documents, setDocuments] = useState("");
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const postData = {
                student_name: studentName,
                phone: phone,
                email: email,
                gender: gender,
                course: course,
                course_method: courseMethod,
                date: dateOfBirth,
                country: country,
                profile: profile,
                documents: documents,
                images: images
            };
    
            console.log("Form Data:", postData);
    
            const response = await axios.post("https://course-server-nw6n.onrender.com/student", postData);
    
            console.log("Response:", response.data);
    
            setStudentName("");
            setPhone("");
            setEmail("");
            setGender("");
            setCourse("");
            setCourseMethod("");
            setDateOfBirth("");
            setCountry("");
            setProfile("");
            setDocuments("");
            setImages([]);
            window.location.reload()
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    
    const handleImageChange = (e, index) => {
        const newImages = [...images];
        newImages[index] = e.target.files[0];
        setImages(newImages);
    };

    const handleAddImageField = () => {
        setImages([...images, null]);
    };

    const handleRemoveImageField = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    
    console.log(profile);
      

    return (
        <div className="registration w-100">
            <h2 className='text-center'>COURSE REGISTRATION FORM</h2>
            <form className='form shadow ' onSubmit={handleSubmit} >
                <div className="form-group">
                    <label>Student Name:</label>
                    <input className="text" type="text" value={studentName} name='studentName' onChange={(e) => setStudentName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input className="text" type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input className="text" type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
                    <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
                </div>
                <div className="form-group">
                    <label>Courses:</label>
                    <input list="course" name="course" onChange={(e) => setCourse(e.target.value)} />
                    <datalist id='course'>
                        <option value='MEARN Stack' />
                        <option value='Data Science' />
                        <option value='Python Django' />
                        <option value='Flutter' />
                    </datalist>
                </div>
                <div className="form-group">
                    <label>Course Method:</label>
                    <input type="checkbox" name="course_method" value="Offline" onChange={(e) => setCourseMethod(e.target.value)} />Offline
                    <input type="checkbox" name="course_method" value="Online" onChange={(e) => setCourseMethod(e.target.value)} />Online
                    <input type="checkbox" name="course_method" value="Hybrid" onChange={(e) => setCourseMethod(e.target.value)} />Hybrid
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" className='date' name='date' onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Profile Picture:</label>
                    <input type="file" name='profile' onChange={(e) => setProfile(e.target.files[0].name)}/>
                </div>
                <div className="form-group">
                    <label>ID card:</label>
                    <input type="file" name='documents' onChange={(e) =>setDocuments(e.target.files[0].name)} />
                </div>


                <div className="form-group">
                    <label>Country:</label>
                    <select className='country' name="country" onChange={(e) => setCountry(e.target.value)}>
                        <option value="none" selected disabled hidden>Select Your Country</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                    </select>
                </div>
                <button className='sumbitbutton' type='submit'>Submit Form</button>
                <Link to="/view"><button  className='viewbutton' type='submit'>View Records</button></Link>
            </form>
        </div>
    );
}

export default Add;
