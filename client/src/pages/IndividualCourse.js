// export default IndividualCourse
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import Navbar from '../Components/Navbar';
import { db } from '../Components/firebase';
import { doc, getDoc } from "firebase/firestore";
// import "./IndividualCourse.css";

function IndividualCourse() {
    const { id } = useParams(); // Access the id parameter from URL path
    const [courseData, setCourseData] = useState(null);
    // Define a state variable to store the selected options
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (e, questionIndex) => {
        const { value } = e.target;

        setSelectedOptions((prevSelectedOptions) => {
            const newSelectedOptions = [...prevSelectedOptions];
            newSelectedOptions[questionIndex] = value;
            return newSelectedOptions;
        });
    }

    const handleGenerateCertificate = () => {
        // Add your logic to generate the certificate here
        console.log("Generate Certificate button clicked");
    }

    useEffect(() => {
        // Fetch individual course data from Firestore based on id
        const fetchIndividualCourseData = async () => {
            try {
                const docRef = doc(db, "courses", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCourseData({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.error('No such document exists!');
                }
            } catch (error) {
                console.error('Error fetching individual course data:', error);
            }
        };

        fetchIndividualCourseData();
    }, [id]); // Trigger useEffect whenever id changes

    if (!courseData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className=" my-5 container">
                <div >
                    <h1>{courseData.courseName}</h1>
                </div>
                <div >
                    <h3>Video</h3>

                    <iframe
                        title={courseData.courseName}
                        width="300"
                        height="200"
                        src={courseData.videoLink}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div >
                    <h1>Quiz</h1>
                    {courseData.questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <h4>Question {questionIndex + 1}</h4>
                            <p>{question.question}</p>
                            <ul>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        <input
                                            type="radio"
                                            name={`question_${questionIndex}`}
                                            value={option}
                                            checked={option === selectedOptions[questionIndex]}
                                            onChange={(e) => handleOptionChange(e, questionIndex)}
                                        />
                                        {option}
                                    </li>
                                ))}
                            </ul>
                            {selectedOptions[questionIndex] === question.answer ? (
                                <p>Correct answer!</p>
                            ) : (
                                <p>Incorrect answer.</p>
                            )}
                        </div>
                    ))}
                </div>
                <button onClick={handleGenerateCertificate}>Generate Certificate</button>
            </div>
        </>
    );
}

export default IndividualCourse;

