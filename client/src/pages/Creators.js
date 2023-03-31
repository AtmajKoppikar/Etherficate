import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import "./Creator.css"

function Creators() {
    const [questions, setQuestions] = useState([{ question: "", options: [] }]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: "", options: [] }]);
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

    const handleAddOption = (qIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options.push("");
        setQuestions(newQuestions);
    };

    const handleRemoveOption = (qIndex, oIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options.splice(oIndex, 1);
        setQuestions(newQuestions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(questions);
        // Here you can post the quiz questions to the server
    };


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="mb-3 my-4">
                    <label htmlFor="instructorName" className="form-label">Instructor Name</label>
                    <input type="text" className="form-control" id="instructorName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseName" className="form-label">Course Name</label>
                    <input type="text" className="form-control" id="courseName" />
                </div>

                <div class="mb-3">
                    <label htmlFor="Description" className="form-label">Course Description</label>
                    <textarea className="form-control" id="Description" rows="3" />
                </div>
                <div className="mb-3">
                    <label htmlFor="video" className="form-label">Video LInk</label>
                    <input type="url" className="form-control" id="video" aria-describedby="emailHelp" />
                </div>




                <div className="quiz-creator">
                    <h2>Create Quiz</h2>
                    <form onSubmit={handleSubmit}>
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
                                    <button
                                        type="button"
                                        className="add-option-btn"
                                        onClick={() => handleAddOption(qIndex)}
                                    >
                                        Add Option
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button type="button" className="add-question-btn" onClick={handleAddQuestion}>
                            Add Question
                        </button>
                        <button type="submit" className="submit-btn">
                            Post Quiz
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Creators