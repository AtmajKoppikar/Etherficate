import { useState } from 'react';
import "./IndividualCourse.css";

function IndividualCourse() {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [mcqAnswers, setMcqAnswers] = useState({});

    const courses = [{
        name: 'Course 1',
        description: 'This is the description for course 1',
        videos: [{ id: 'video1', title: 'Video 1', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', },],
        mcqs: [
            {
                question: 'What is the capital of France?',
                options: ['Paris', 'Berlin', 'London', 'Madrid'],
                answer: 'Paris',
            },
            {
                question: 'What is the largest country in the world?',
                options: ['Russia', 'China', 'Canada', 'USA'],
                answer: 'Russia',
            },
        ],
    },
    {
        name: 'Course 2',
        description: 'This is the description for course 2',
        videos: [
            {
                id: 'video3',
                title: 'Video 3',
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },

        ],
        mcqs: [
            {
                question: 'What is the capital of Japan?',
                options: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'],
                answer: 'Tokyo',
            },
            {
                question: 'What is the currency of Italy?',
                options: ['Euro', 'Dollar', 'Pound', 'Yen'],
                answer: 'Euro',
            },
        ],
    },
    ];

    const handleVideoClick = (videoId) => {
        setCurrentVideo(videoId);
    };

    const handleMcqChange = (questionIndex, answerIndex) => {
        setMcqAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: answerIndex,
        }));
    };

    const currentCourse = courses[0]; // You can modify this to display a different course

    return (
        <div className='container'>
            <h1>{currentCourse.name}</h1>
            <p>{currentCourse.description}</p>
            <div>
                <h2>Videos</h2>
                {currentCourse.videos.map((video) => (
                    <div key={video.id}>
                        <h3>{video.title}</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZgMw__KdjiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        {/* <video src={video.url}></video> */}
                        {/* <button onClick={() => handleVideoClick(video.id)}>Watch</button> */}
                    </div>
                ))}
                {currentVideo && (
                    <div>
                        <h3>Current Video</h3>
                        <p>{currentVideo}</p>
                    </div>
                )}
            </div>
            <div>
                <h2>MCQs</h2>
                {currentCourse.mcqs.map((mcq, index) => (
                    <div key={index}>
                        <h3>{mcq.question}</h3>
                        {mcq.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <input
                                    type="radio"
                                    id={`mcq-${index}-${optionIndex}`}
                                    name={`mcq-${index}`}
                                    value={optionIndex}
                                    onChange={() => handleMcqChange(index, optionIndex)}
                                    checked={mcqAnswers[index] === optionIndex}
                                />
                                <label htmlFor={`mcq-${index}-${optionIndex}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );

}


export default IndividualCourse