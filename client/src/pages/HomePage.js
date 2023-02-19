import React from 'react'
import { useState } from 'react';
import Login from '../Components/Login';
import "./HomePage.css";

function HomePage() {
    // Properties

    const [walletAddress, setWalletAddress] = useState("");

    // Helper Functions

    // Requests access to the user's META MASK WALLET
    // https://metamask.io
    async function requestAccount() {
        console.log('Requesting account...');

        // ❌ Check if Meta Mask Extension exists 
        if (window.ethereum) {
            console.log('detected');

            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.log('Error connecting...');
            }

        } else {
            alert('Meta Mask not detected');
        }
    }

    return (
        <div>
            <div className="start">
                <div className="navbar flex">
                    <div className="right">
                        <img src="img/logo-icon.svg" alt=""></img>
                    </div>
                    <div className="nav-content">
                        <ul className="flex">
                            <li><a href="$">Home</a></li>
                            <li><a href="$">Course List</a></li>
                            <li><a href="$">Instructions</a></li>
                            <li><a href="$">About us</a></li>
                        </ul>
                    </div>
                    <div className="login">
                        Login
                    </div>
                    <div className="cart">
                        <img className="left" src="img/cart-icon.svg" alt=""></img>
                    </div>
                    <div className="profile">
                        <img className="left" src="img/profile-icon.svg" alt="" />
                    </div>

                </div>
                <section id="intro" className="flex">
                    <div className="site-name">
                        <h1>Etherficate</h1>
                        <h3>CERTIFICATE SAVED WITH ETHERIUM</h3>
                    </div>
                    <div className="search">
                        <input type="search" name="search" placeholder="Search" />
                    </div>
                    <div className="link">
                        <button

                            onClick={requestAccount}

                        >Link Wallet</button>
                        <h3 style={{ color: 'white', marginLeft: "7rem" }}>Wallet Address: {walletAddress}</h3>
                    </div>
                </section>
            </div>
            {/* <!----------------------------------------------------------------------     --> */}
            <section id="courses">
                <div className="courses-header flex">
                    <div className="description">
                        <h1>Featured Courses</h1>
                        <h3>Start, switch, or advance your career with more than 5,200 courses.</h3>
                    </div>
                    <div className="link">
                        <button>BROWSE COURSES</button>
                    </div>
                </div>
                <div className="card-container flex">
                    <div className="card-section">
                        <div className="cards">
                            <div className="c-img">
                                <img src="img/thumbnail-1.jpg" alt="" />
                            </div>
                            <div className="c-description">
                                <h3>Modern JavaScript BootCamp</h3>
                                <h6>by Creator Name</h6>
                            </div>
                            <div className="buy flex">
                                <span className="price">$200</span>
                                <button className="add-cart">Add to Cart</button>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="c-img">
                                <img src="img/thumbnail-1.jpg" alt="" />
                            </div>
                            <div className="c-description">
                                <h3>Modern JavaScript BootCamp</h3>
                                <h6>by Creator Name</h6>
                            </div>
                            <div className="buy flex">
                                <span className="price">$200</span>
                                <button className="add-cart">Add to Cart</button>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="c-img">
                                <img src="img/thumbnail-1.jpg" alt="" />
                            </div>
                            <div className="c-description">
                                <h3>Modern JavaScript BootCamp</h3>
                                <h6>by Creator Name</h6>
                            </div>
                            <div className="buy flex">
                                <span className="price">$200</span>
                                <button className="add-cart">Add to Cart</button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="c-img">
                                <img src="img/thumbnail-1.jpg" alt="" />
                            </div>
                            <div className="c-description">
                                <h3>Modern JavaScript BootCamp</h3>
                                <h6>by Creator Name</h6>
                            </div>
                            <div className="buy flex">
                                <span className="price">$200</span>
                                <button className="add-cart">Add to Cart</button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="c-img">
                                <img src="img/thumbnail-1.jpg" alt="" />
                            </div>
                            <div className="c-description">
                                <h3>Modern JavaScript BootCamp</h3>
                                <h6>by Creator Name</h6>
                            </div>
                            <div className="buy flex">
                                <span className="price">$200</span>
                                <button className="add-cart">Add to Cart</button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="c-img">
                                <img src="img/thumbnail-1.jpg" alt="" />
                            </div>
                            <div className="c-description">
                                <h3>Modern JavaScript BootCamp</h3>
                                <h6>by Creator Name</h6>
                            </div>
                            <div className="buy flex">
                                <span className="price">$200</span>
                                <button className="add-cart">Add to Cart</button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="c-img">
                                <img src="img/thumbnail-1.jpg" alt="" />
                            </div>
                            <div className="c-description">
                                <h3>Modern JavaScript BootCamp</h3>
                                <h6>by Creator Name</h6>
                            </div>
                            <div className="buy flex">
                                <span className="price">$200</span>
                                <button className="add-cart">Add to Cart</button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="c-img">
                                <img src="img/thumbnail-1.jpg" alt="" />
                            </div>
                            <div className="c-description">
                                <h3>Modern JavaScript BootCamp</h3>
                                <h6>by Creator Name</h6>
                            </div>
                            <div className="buy flex">
                                <span className="price">$200</span>
                                <button className="add-cart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="category">
                <div className="category-header flex">
                    <h1>Popular Categories</h1>
                    <h3>Accelerate your growth by learning the most popular courses</h3>
                </div>
                <div className="cat-card-container flex">
                    <div className="cat-card-section">
                        <div className="cat">
                            <img src="img/dev-cat-img.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Course Category</h5>
                                <p className="card-text">5 Courses</p>
                                <a href="#" className="btn">View Course</a>
                            </div>
                        </div>
                        <div className="cat">
                            <img src="img/dev-cat-img.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Course Category</h5>
                                <p className="card-text">5 Courses</p>
                                <a href="#" className="btn">View Course</a>
                            </div>
                        </div>
                        <div className="cat">
                            <img src="img/dev-cat-img.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Course Category</h5>
                                <p className="card-text">5 Courses</p>
                                <a href="#" className="btn">View Course</a>
                            </div>
                        </div>
                        <div className="cat">
                            <img src="img/dev-cat-img.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Course Category</h5>
                                <p className="card-text">5 Courses</p>
                                <a href="#" className="btn">View Course</a>
                            </div>
                        </div>
                        <div className="cat">
                            <img src="img/dev-cat-img.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Course Category</h5>
                                <p className="card-text">5 Courses</p>
                                <a href="#" className="btn">View Course</a>
                            </div>
                        </div>
                        <div className="cat">
                            <img src="img/dev-cat-img.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Course Category</h5>
                                <p className="card-text">5 Courses</p>
                                <a href="#" className="btn">View Course</a>
                            </div>
                        </div>
                        <div className="cat">
                            <img src="img/dev-cat-img.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Course Category</h5>
                                <p className="card-text">5 Courses</p>
                                <a href="#" className="btn">View Course</a>
                            </div>
                        </div>
                        <div className="cat">
                            <img src="img/dev-cat-img.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Course Category</h5>
                                <p className="card-text">5 Courses</p>
                                <a href="#" className="btn">View Course</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="flow">
                <div className="img flex">
                    <img src="img/Etherficate website-flow.png" alt="" />
                </div>
            </section>
            <div className="last">
                <ul>
                    <li> <span>&copy;</span> Copyright ©2022 | Etherficate</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage