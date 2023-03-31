import React from 'react'
import Navbar from '../Components/Navbar'

function CoursePage() {
    const cardDetails = [
        {
            courseName: "Python",
            authorName: "Yash",
            courseDescription: "Python by Yash is the most amazing course."
        },
        {
            courseName: "JS",
            authorName: "Yash",
            courseDescription: "JS by Yash is the most amazing course."
        },
        {
            courseName: "C++",
            authorName: "Yash",
            courseDescription: "C++ by Yash is the most amazing course."
        },
        {
            courseName: "Java",
            authorName: "Yash",
            courseDescription: "Java by Yash is the most amazing course."
        },
        {
            courseName: "ML",
            authorName: "Yash",
            courseDescription: "ML by Yash is the most amazing course."
        },
    ]
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    {
                        cardDetails.map((card) =>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top"
                                        alt="Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title">{card.courseName}</h5>
                                        <h5 class="author">Author : {card.authorName}</h5>
                                        <p class="card-text">
                                            {card.courseDescription}
                                        </p>
                                        <button>View course</button>
                                    </div>
                                    {/* <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div> */}
                                </div>
                            </div>)
                    }
                    {/* <div class="col">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top"
                                alt="Los Angeles Skyscrapers" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.
                                </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
                                alt="Palm Springs Road" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to show
                                    that equal height action.
                                </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
                                alt="Palm Springs Road" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to show
                                    that equal height action.
                                </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default CoursePage