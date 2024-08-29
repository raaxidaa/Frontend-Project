import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobsData from './Find Jobs Json/jobsData.json';

const JobDetails = () => {
    const id = useParams().id;
    const job = jobsData.find(job => job.id == id);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApplicationSent, setIsApplicationSent] = useState(false);

    const handleBackClick = () => {
        navigate('/jobs');
    };

    const handleApplyClick = () => {
        setIsModalOpen(true);
        setIsApplicationSent(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsApplicationSent(false); 
    };

    const handleApplicationSent = () => {
        setIsApplicationSent(true);
    };

    if (!job) {
        return <div className="no-job-found container">Job not found</div>;
    }

    return (
        <div className="job-details">
            <div className='back container' onClick={handleBackClick}>
                <img src="/l1.png" alt="" />
                <span>Back</span>
            </div>
            <div className="job-details-center container">
                <div className="job-details-left">
                    <div className="left-top">
                        <span>Job Descriptions</span>
                        <h1>{job.jobTitle}</h1>
                        <div className="three">
                            {job.location && (
                                <div className="date">
                                    <img src="/map-pin-3.png" alt="Location" />
                                    <span>{job.location}</span>
                                </div>
                            )}
                            {job.jobType && (
                                <div className="date">
                                    <img src="/calendar.png" alt="Job Type" />
                                    <span>{job.jobType}</span>
                                </div>
                            )}
                            {job.experience && (
                                <div className="date">
                                    <img src="/reports.png" alt="Experience" />
                                    <span>{job.experience}</span>
                                </div>
                            )}
                            {job.remoteStatus && (
                                <div className="date">
                                    <img src="/mouse.png" alt="Remote Status" />
                                    <span>{job.remoteStatus}</span>
                                </div>
                            )}
                        </div>
                        <div className="buttons">
                            <div className="left-buttons">
                                <button onClick={handleApplyClick}>
                                    <img src="/airplay.png" alt="" />
                                    <span className='apply'>Apply Job</span>
                                </button>
                                <button>
                                    <img src="/bookmark.png" alt="" />
                                </button>
                            </div>
                            <div className="right-buttons">
                                <img src="/f.png" alt="" />
                                <img src="/l1.png" alt="" />
                                <img src="/t.png" alt="" />
                                <img src="/end.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="left-bottom">
                        <div className="four">
                            <h5>Overview</h5>
                            <div className="text">
                                {job.Overview.map((sentence, index) => (
                                    <p key={index}>• {sentence}</p>
                                ))}
                            </div>
                        </div>
                        <div className="four">
                            <h5>The Role:</h5>
                            <div className="text">
                                {job.role.map((sentence, index) => (
                                    <p key={index}>• {sentence}</p>
                                ))}
                            </div>
                        </div>
                        <div className="four">
                            <h5>Responsibilities:</h5>
                            <div className="text">
                                {job.Responsibilities.map((sentence, index) => (
                                    <p key={index}>• {sentence}</p>
                                ))}
                            </div>
                        </div>
                        <div className="four">
                            <h5>You have :</h5>
                            <div className="text">
                                {job.have.map((sentence, index) => (
                                    <p key={index}>• {sentence}</p>
                                ))}
                            </div>
                        </div>
                        <p className='know'>🌈 Mailchimp is 100% in support of diversity and inclusion...</p>
                        <div className="buttons">
                            <div className="left-buttons">
                                <button onClick={handleApplyClick}>
                                    <img src="/airplay.png" alt="" />
                                    <span>Apply Job</span>
                                </button>
                                <button>
                                    <img src="/bookmark.png" alt="" />
                                </button>
                            </div>
                            <div className="right-buttons">
                                <img src="/f.png" alt="" />
                                <img src="/linkedin.png" alt="" />
                                <img src="/t.png" alt="" />
                                <img src="/end.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="job-details-right">
                    <img src={job.logo} alt="" />
                    <span>Job By</span>
                    <h1>{job.jobTitle} <img src="/logo1.png" alt="" /></h1>
                    <p>{job.description}</p>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    {!isApplicationSent ? (
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <form onSubmit={(e) => { e.preventDefault(); handleApplicationSent(); }}>
                                <h1>Apply for this position</h1>
                                <span>The following is required and will only be shared with Opeepl</span>
                                <label htmlFor="name">First Name</label>
                                <input type="text" name="name" id="name" placeholder='Cameron Williamson'/>
                                <div className="two">
                                    <div className="t1">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder='cameronw@gmail.com' />
                                    </div>
                                    <div className="t1">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" name="phone" id="phone" placeholder='(405) 555-0128' />
                                    </div>
                                </div>
                                <label htmlFor="title">Job Title</label>
                                <input type="text" name="title" id="title" placeholder='Current or previous job title'/>
                                <label htmlFor="linkedin">LinkedIn</label>
                                <input type="text" name="linkedin" id="linkedin" placeholder='https://'/>
                                <label htmlFor="cv">CV/Resume</label>
                                <div className="dashed">
                                    <input type="file" name="cv" id="cv" />
                                </div>
                                <div className="end">
                                    <input type="checkbox" name="emailUpdates" id="emailUpdates" />
                                    <p>Send me email updates with similar positions</p>
                                </div>
                                <div className="buttons">
                                    <span onClick={handleCloseModal}>Cancel</span>
                                    <button className='none' type="submit">
                                        <img src="/airplay11.png" alt="" />
                                        Apply Job
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="modal-content2">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <img src="/mail-check.png" alt="" />
                            <h1>Application Sent!</h1>
                            <p>Mailchimp will contact if your skills and experiences are a strong match</p>
                            <button onClick={handleCloseModal}>Browse more similar jobs</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default JobDetails;
