import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import jobsData from './Find Jobs Json/jobsData.json';

const JobDetails = () => {
    const id = useParams().id;
    const job = jobsData.find(job => job.id == id)
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/jobs');
    };

    if (!job) {
        return <div className="no-job-found container">Job not found</div>;
    }



    return (
        <div className="job-details">
            <div className=' back container' onClick={handleBackClick}>
                <img src="public/l1.png" alt="" />
                <span> Back</span>
            </div>
            <div className="job-details-center container">
                <div className="job-details-left">
                    <div className="left-top">
                        <span>Job Descriptions</span>
                        <h1>{job.jobTitle}</h1>
                        <div className="three">
                            {job.location && (
                                <div className="date">
                                    <img src="/public/map-pin-3.png" alt="Location" />
                                    <span>{job.location}</span>
                                </div>
                            )}
                            {job.jobType && (
                                <div className="date">
                                    <img src="/public/calendar.png" alt="Job Type" />
                                    <span>{job.jobType}</span>
                                </div>
                            )}
                            {job.experience && (
                                <div className="date">
                                    <img src="/public/reports.png" alt="Experience" />
                                    <span>{job.experience}</span>
                                </div>
                            )}
                            {job.remoteStatus && (
                                <div className="date">
                                    <img src="/public/mouse.png" alt="Remote Status" />
                                    <span>{job.remoteStatus}</span>
                                </div>
                            )}
                        </div>
                        <div className="buttons">
                            <div className="left-buttons">
                                <button>
                                    <img src="public/airplay.png" alt="" />
                                    <span>Apply Job</span>
                                </button>
                                <button>
                                    <img src="/public/bookmark.png" alt="" />
                                </button>
                            </div>
                            <div className="right-buttons">
                                <img src="/public/f.png" alt="" />
                                <img src="public/l1.png" alt="" />
                                <img src="/public/t.png" alt="" />
                                <img src="/public/end.png" alt="" />
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
                        <p className='know'>🌈 Mailchimp is 100% in support of diversity and inclusion. Our differences help drive our success, and having a diverse team is fundamental to our success. Uxcel welcomes people from any race, orientation, gender, religion, age, ethnicity, disability, and identity!</p>
                        <div className="buttons">
                            <div className="left-buttons">
                                <button>
                                    <img src="public/airplay.png" alt="" />
                                    <span>Apply Job</span>
                                </button>
                                <button>
                                    <img src="/public/bookmark.png" alt="" />
                                </button>
                            </div>
                            <div className="right-buttons">
                                <img src="/public/f.png" alt="" />
                                <img src="public/linkedin.png" alt="" />
                                <img src="/public/t.png" alt="" />
                                <img src="/public/end.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="job-details-right">
                    <img src={job.logo} alt="" />
                    <span>Job By</span>
                    <h1>{job.jobTitle} <img src="/public/logo1.png" alt="" /></h1>
                    <p>{job.description}</p>

                </div>

            </div>
        </div>
    )
}

export default JobDetails