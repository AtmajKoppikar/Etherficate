import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

import './Creator.css';
import { db } from '../Components/firebase';
import { collection, addDoc } from "firebase/firestore";

function Creators() {
    const [questions, setQuestions] = useState([{ question: '', options: [], answer: '' }]);
    const [instructorName, setInstructorName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [thumbnailImage, setthumbnailImage] = useState('');

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', options: [], answer: '' }]);
    };

    const handleQuestionChange = (event, index) => {
        const newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (event, qIndex, oIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (event, index) => {
        const newQuestions = [...questions];
        newQuestions[index].answer = event.target.value;
        setQuestions(newQuestions);
    };

    const handleAddOption = (qIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options.push('');
        setQuestions(newQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a new course object
            const newCourse = {
                courseName,
                instructorName,
                courseDescription,
                videoLink,
                thumbnailImage,
                questions,
            };

            // Add the course to Firestore collection
            const docRef = await addDoc(collection(db, "courses"), newCourse);
            console.log("Document written with ID: ", docRef.id);

            // Reset form inputs
            setthumbnailImage('');
            setCourseName('');
            setInstructorName('');
            setCourseDescription('');
            setVideoLink('');
            setQuestions([{ question: '', options: ['', '', ''], answer: '' }]);
        } catch (error) {
            console.log(courseName);
            console.error('Error adding course:', error);
        }
    };

    const handleRemoveQuestion = (qIndex) => {
        setQuestions((prevQuestions) => {
            // Create a copy of the questions array
            const updatedQuestions = [...prevQuestions];
            // Remove the question at the specified index
            updatedQuestions.splice(qIndex, 1);
            return updatedQuestions;
        });
    };

    const handleRemoveOption = (qIndex, oIndex) => {
        setQuestions((prevQuestions) => {
            // Create a copy of the questions array
            const updatedQuestions = [...prevQuestions];
            // Remove the option at the specified index from the question at qIndex
            updatedQuestions[qIndex].options.splice(oIndex, 1);
            return updatedQuestions;
        });
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-4">
                        <label htmlFor="instructorName" className="form-label">
                            Instructor Name
                        </label>
                        <input type="text"
                            className="form-control"
                            id="instructorName"
                            value={instructorName}
                            onChange={(event) => setInstructorName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="courseName" className="form-label">
                            Course Name
                        </label>
                        <input type="text"
                            className="form-control"
                            id="courseName"
                            value={courseName}
                            onChange={(event) => setCourseName(event.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="courseDescription" className="form-label">
                            Course Description
                        </label>
                        <textarea
                            className="form-control"
                            id="courseDescription"
                            rows="3"

                            value={courseDescription}
                            onChange={(event) => setCourseDescription(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="videoLink" className="form-label">
                            Video Link
                        </label>
                        <input type="url" className="form-control" id="videoLink"
                            value={videoLink}
                            onChange={(event) => setVideoLink(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="thumbnailImage" className="form-label">
                            Thumbnail Image
                        </label>
                        <input type="url" className="form-control" id="thumbnailImage"
                            value={thumbnailImage}
                            onChange={(event) => setthumbnailImage(event.target.value)} />
                    </div>

                    <div className="quiz-creator">
                        <h2>Create Quiz</h2>
                        {questions.map((q, qIndex) => (
                            <div key={qIndex} className="question-container">
                                <input
                                    type="text"
                                    placeholder={`Question ${qIndex + 1}`}
                                    value={q.question}
                                    onChange={(event) => handleQuestionChange(event, qIndex)}
                                />
                                <div className="options-container">
                                    {q.options.map((o, oIndex) => (
                                        <div key={oIndex} className="option-container">
                                            <input
                                                type="text"
                                                placeholder={`Option ${oIndex + 1}`}
                                                value={o}
                                                onChange={(event) => handleOptionChange(event, qIndex, oIndex)}
                                            />
                                            {q.options.length > 2 && (
                                                <button
                                                    type="button"
                                                    className="remove-option-btn"
                                                    onClick={() => handleRemoveOption(qIndex, oIndex)}
                                                >
                                                    &times;
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button type="button" className="add-option-btn" onClick={() => handleAddOption(qIndex)}>
                                        Add Option
                                    </button>
                                </div>
                                {questions.length > 1 && (
                                    <button
                                        type="button"
                                        className="remove-question-btn"
                                        onClick={() => handleRemoveQuestion(qIndex)}
                                    >
                                        Remove Question
                                    </button>
                                )}
                                <input
                                    type="text"
                                    placeholder={`Answer for Question ${qIndex + 1}`}
                                    value={q.answer}
                                    onChange={(event) => handleAnswerChange(event, qIndex)}
                                />
                            </div>
                        ))}
                        <button type="button" className="add-question-btn" onClick={handleAddQuestion}>
                            Add Question
                        </button>
                    </div>
                    <button type="submit" className="submit-btn">
                        Submit course
                    </button>
                </form>
            </div>
        </>
    );
}

export default Creators;