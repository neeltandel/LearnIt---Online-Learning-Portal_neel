import React, { useState } from 'react';
import './Styles/LearnPressDemo.css';
import { FaLinkedin } from 'react-icons/fa';

function LearnPressDemo() {
    const [learnpressActiveTab, setLearnpressActiveTab] = useState('description');
    const [learnpressOpenSections, setLearnpressOpenSections] = useState({});

    const showLearnpressTab = (tabId) => setLearnpressActiveTab(tabId);
    const toggleLearnpressSections = (chapterId) => {
        const allSections = document.querySelectorAll(".learnpress-section-list");
        allSections.forEach((section) => {
            if (section.id !== chapterId) {
                section.style.display = "none";
            }
        });
        const sectionList = document.getElementById(chapterId);
        sectionList.style.display = sectionList.style.display === "none" ? "block" : "none";
    };

    return (
        <div className="learnpress-container">
            {/* Header */}
            <header className="learnpress-header">
                <h1>Introduction to LearnPress – LMS Plugin</h1>
            </header>

            {/* Main Content */}
            <div className="learnpress-main-content">
                {/* Left Sidebar */}
                <div className="learnpress-sidebar">
                    <div className="learnpress-video">
                        <iframe
                            src="https://www.youtube.com/embed/Zt4fLu6pGt8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="learnpress-course-info">
                        <p><strong>👍</strong> 100% positive reviews</p>
                        <p><strong>🧑‍🎓</strong> 279 students</p>
                        <p><strong>📖</strong> 15 lessons</p>
                        <p><strong>🌐</strong> English</p>
                        <p><strong>📝</strong> 1 quiz</p>
                        <p><strong>✏️</strong> Yes</p>
                        <p><strong>♾️</strong> Unlimited access</p>
                    </div>
                    <a href="#" className="learnpress-start-button">Start Now</a>
                </div>

                {/* Center Content */}
                <div className="learnpress-content">
                    {/* Tabs */}
                    <div className="learnpress-tabs">
                        <div className={`learnpress-tab ${learnpressActiveTab === 'description' ? 'learnpress-tab-active' : ''}`} onClick={() => showLearnpressTab('description')}>Description</div>
                        <div className={`learnpress-tab ${learnpressActiveTab === 'curriculum' ? 'learnpress-tab-active' : ''}`} onClick={() => showLearnpressTab('curriculum')}>Curriculum</div>
                        <div className={`learnpress-tab ${learnpressActiveTab === 'instructor' ? 'learnpress-tab-active' : ''}`} onClick={() => showLearnpressTab('instructor')}>Instructor</div>
                        <div className={`learnpress-tab ${learnpressActiveTab === 'leaderboard' ? 'learnpress-tab-active' : ''}`} onClick={() => showLearnpressTab('leaderboard')}>Leaderboard</div>
                    </div>

                    {/* Tab Content */}
                    {learnpressActiveTab === 'description' && (
                        <div className="learnpress-tab-content">
                            <p>This course will give you an overview of LAN and other networking basics. You’ll learn about IP addresses, serial data transfer, and computing types.</p>
                            <div className="learnpress-feature-box">
                                <h3>In This Free Course, You Will Learn How To</h3>
                                <ul>
                                    <li>Interactive video tutorials</li>
                                    <li>Step-by-step setup guides</li>
                                    <li>Real-world case studies</li>
                                    <li>Hands-on assessments and quizzes</li>
                                    <li>In-depth modules on LMS customization and user management</li>
                                </ul>
                            </div>
                            <p>Idea 1: "Building an Online Learning Empire with LearnPress: A Step-by-Step Guide to Creating a Thriving eLearning Business"</p>
                            <p>Idea 2: "Unleash Your Teaching Superpowers: 10 Genius LearnPress Hacks to Take Your Online Courses to the Next Level"</p>
                            <img src="https://eduma.thimpress.com/demo-learning-platform/wp-content/uploads/sites/101/2022/06/single-course-1.jpg" alt="LearnPress Course" className="learnpress-image" />
                        </div>
                    )}

                    {learnpressActiveTab === 'curriculum' && (
                         <div id="learnpress-curriculum" className="learnpress-tab-content active">
                         <div className="learnpress-chapter-box">
                             <h3 onClick={() => toggleLearnpressSections("chapter1")}>📍 LearnPress Getting Started</h3>
                             <div className="learnpress-section-list" id="chapter1">
                                 <p>🧾 What is LearnPress?</p>
                                 <p>📒 How to use Learnpress?</p>
                                 <p>❓ Demo Quiz to Learnpress</p>
                             </div>
                         </div>
 
                         <div className="learnpress-chapter-box">
                             <h3 onClick={() => toggleLearnpressSections("chapter2")}>📍 Learnpress Live Course</h3>
                             <div className="learnpress-section-list" id="chapter2">
                                 <p>👨🏻‍💻 Demo Zoom Meeting Lesson</p>
                                 <p>👨🏻‍💻 Demo Google Meeting Lesson</p>
                             </div>
                         </div>
                     </div>
                    )}

                    {learnpressActiveTab === 'instructor' && (
                        <div className="learnpress-tab-content">
                            <div className="learnpress-instructor-profile">
                                <img src="https://media.istockphoto.com/id/1220701258/photo/sit-less-and-walk-more.jpg?s=612x612&w=0&k=20&c=uQvi4uvthrhPNFv3knxlJNTg5jtLptynTDZBxMzIPVs=" alt="Instructor" className="learnpress-instructor-image" />
                                <p><strong>Saurabh Tiwari</strong></p>
                                <p>👉 Expert in Networking & Security</p>
                                <p>👉 Students taught: 5,000+</p>
                                <p>👉 Total courses offered: 10</p>
                                <a href="https://www.linkedin.com/in/saurabh-tiwari-a5450859/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="learnpress-linkedin-link">
                                    <FaLinkedin size={30} className="learnpress-linkedin-icon" />
                                </a>
                            </div>
                        </div>
                    )}

                    {learnpressActiveTab === 'leaderboard' && (
                        <div className="learnpress-tab-content">
                            {/* Leaderboard content */}
                        </div>
                    )}
                </div>
            </div>

            {/* Rating Section */}
            <div className="learnpress-rating-section">
                🌟🌟🌟🌟🌟 5.0
            </div>
        </div>
    );
}

export default LearnPressDemo;