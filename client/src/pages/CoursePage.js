import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../Components/Navbar';
import { db } from '../Components/firebase';
import { doc, collection, getDocs } from "firebase/firestore";
import IndividualCourse from './IndividualCourse';


function CoursePage() {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        // Fetch course data from Firestore
        const fetchCourseData = async () => {
            try {
                const snapshot = await getDocs(collection(db, "courses"));
                const coursesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setCourseData(coursesData);
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourseData();
    }, []);

    return (
        <>

            <Navbar />
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {courseData.map((card) => (
                        <div className="col" key={card.id}>
                            <div className="card h-100">
                                <img src={card.thumbnailImage} className="card-img-top" alt="Palm Springs Road" />
                                <div className="card-body">
                                    <h5 className="card-title">{card.courseName}</h5>
                                    <h5 className="author">Author: {card.instructorName}</h5>
                                    <p className="card-text">
                                        {card.courseDescription}
                                    </p>
                                </div>

                                {/* Use Link to navigate to IndividualCourse.js */}
                                <Link to={`/course/${card.id}`}>
                                    <button>View course</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CoursePage;
