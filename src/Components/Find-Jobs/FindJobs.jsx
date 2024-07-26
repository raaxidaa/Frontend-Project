import React, { useState } from 'react';
import jobsData from './jobsData.json';

const FindJobs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(jobsData);
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedJobType, setSelectedJobType] = useState('');

    const handleSearch = () => {
        const filteredData = jobsData.filter(job =>
            job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (job.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
                locationQuery.toLowerCase().includes(job.location.toLowerCase()))
        );

        applyFilters(filteredData);
    };

    const keywords = [
        "Analyst",
        "Developer",
        "Development",
        "Science",
        "Design",
        "Engineer",
        "Marketing"
    ];

    const calculateJobCounts = () => {
        const jobCounts = {};
        keywords.forEach(keyword => {
            jobCounts[keyword] = 0;
        });
        jobsData.forEach(job => {
            const title = job.jobTitle.toLowerCase();
            keywords.forEach(keyword => {
                if (title.includes(keyword.toLowerCase())) {
                    jobCounts[keyword]++;
                }
            });
        });

        return jobCounts;
    };

    const jobCounts = calculateJobCounts();

    const handleRoleFilter = (keyword) => {
        setSelectedRole(keyword);

        const filteredData = jobsData.filter(job =>
            job.jobTitle.toLowerCase().includes(keyword.toLowerCase()) &&
            (job.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
                locationQuery.toLowerCase().includes(job.location.toLowerCase()))
        );

        applyFilters(filteredData);
    };

    const handleLevelFilter = (level) => {
        setSelectedLevel(level);

        const filteredData = jobsData.filter(job =>
            job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (job.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
                locationQuery.toLowerCase().includes(job.location.toLowerCase())) &&
            job.experience.toLowerCase().includes(level.toLowerCase())
        );

        applyFilters(filteredData);
    };

    const handleJobTypeFilter = (jobType) => {
        setSelectedJobType(jobType);

        const filteredData = jobsData.filter(job =>
            job.jobType.toLowerCase().includes(jobType.toLowerCase()) &&
            job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (job.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
                locationQuery.toLowerCase().includes(job.location.toLowerCase()))
        );

        applyFilters(filteredData);
    };

    const handleRemoteFilter = () => {
        const filteredData = filteredJobs.filter(job =>
            job.remoteStatus === "Remote OK"
        );

        setFilteredJobs(filteredData);
    };

    const handleClearFilters = () => {
        setSelectedRole('');
        setSelectedLevel('');
        setSearchQuery('');
        setLocationQuery('');
        setSelectedJobType('');
        setFilteredJobs(jobsData);
    };

    const applyFilters = (data) => {
        let filteredData = data;

        if (selectedRole) {
            filteredData = filteredData.filter(job =>
                job.jobTitle.toLowerCase().includes(selectedRole.toLowerCase())
            );
        }

        if (selectedLevel) {
            filteredData = filteredData.filter(job =>
                job.experience.toLowerCase().includes(selectedLevel.toLowerCase())
            );
        }

        if (selectedJobType) {
            filteredData = filteredData.filter(job =>
                job.jobType.toLowerCase().includes(selectedJobType.toLowerCase())
            );
        }

        setFilteredJobs(filteredData);
    };

    return (
        <div className="back">
            <div className='find-jobs container'>
                <div className="search2">
                    <img src="public/search.png" alt="" />
                    <input type="text" name="search" id="search" placeholder="Company, Job Title..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <img src="public/map-pin-3.png" alt="" />
                    <input type="text" name="map" id="map" placeholder="City, State, or Country" value={locationQuery} onChange={(e) => setLocationQuery(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="find-jobs-center">
                    <div className="center-left">
                        <div className="title">
                            <h1>Job Opportunities <span>({filteredJobs.length})</span></h1>
                            <button className='newest'>
                                <img src="public/flashlight.png" alt="" />
                                Newest
                                <img src="public/arrow-chevron-down.png" alt="" />
                            </button>
                        </div>
                        <div className="jobs">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map(job => (
                                    <div className="job" key={job.id}>
                                        <div className="job-top">
                                            <div className="job-top-left">
                                                <img src={job.logo} alt={`${job.company} logo`} />
                                            </div>
                                            <div className="job-top-right">
                                                {job.company && job.posted && (
                                                    <div className='bir'>
                                                        <span>{job.company}</span>
                                                        <span>{job.posted}</span>
                                                    </div>
                                                )}
                                                <div className='iki'>
                                                    <h1>{job.jobTitle}</h1>
                                                    {job.applyType && <span>{job.applyType}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-bottom">
                                            {job.location && (
                                                <div className="date">
                                                    <img src="public/map-pin-3.png" alt="" />
                                                    <span>{job.location}</span>
                                                </div>
                                            )}
                                            {job.jobType && (
                                                <div className="date">
                                                    <img src="public/calendar.png" alt="" />
                                                    <span>{job.jobType}</span>
                                                </div>
                                            )}
                                            {job.experience && (
                                                <div className="date">
                                                    <img src="public/reports.png" alt="" />
                                                    <span>{job.experience}</span>
                                                </div>
                                            )}
                                            {job.remoteStatus && (
                                                <div className="date">
                                                    <img src="public/mouse.png" alt="" />
                                                    <span>{job.remoteStatus}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className='error1'>No jobs found matching the entered criteria.</p>
                            )}
                        </div>
                    </div>
                    <div className="center-right">
                        <div className="center-right-title">
                            <span>Filters</span>
                            <span className='clear' onClick={handleClearFilters}> Clear</span>
                        </div>
                        <div className="filters">
                            <div className="filter1">
                                <div className="title">
                                    <span>Roles</span>
                                    <img src="public/arrow-chevron-up.png" alt="" />
                                </div>
                                {keywords.map((keyword, index) => (
                                    <div className="five" key={index}>
                                        <input type="radio" name="roles" id={keyword} onChange={() => handleRoleFilter(keyword)} checked={selectedRole === keyword} />
                                        <label htmlFor={keyword}>{keyword} <span>({jobCounts[keyword]})</span></label>
                                    </div>
                                ))}
                            </div>
                            <div className="filter2">
                                <div className="title">
                                    <span>Seniority Level</span>
                                    <img src="public/arrow-chevron-up.png" alt="" />
                                </div>
                                <div className="five">
                                    <input type="radio" name="level" id="Junior" onChange={() => handleLevelFilter("Junior")} checked={selectedLevel === "Junior"} />
                                    <label htmlFor="Junior">Junior  </label>
                                </div>
                                <div className="five">
                                    <input type="radio" name="level" id="Mid-Level" onChange={() => handleLevelFilter("Mid-Level")} checked={selectedLevel === "Mid-Level"} />
                                    <label htmlFor="Mid-Level">Mid-Level  </label>
                                </div>
                                <div className="five">
                                    <input type="radio" name="level" id="Senior" onChange={() => handleLevelFilter("Senior")} checked={selectedLevel === "Senior"} />
                                    <label htmlFor="Senior">Senior  </label>
                                </div>
                                <div className="five">
                                    <input type="radio" name="level" id="Expert" onChange={() => handleLevelFilter("Expert & Leadership")} checked={selectedLevel === "Expert & Leadership"} />
                                    <label htmlFor="Expert">Expert & Leadership </label>
                                </div>
                            </div>
                            <div className="filter3">
                                <div className="title">
                                    <span>Job Type</span>
                                    <img src="public/arrow-chevron-up.png" alt="" />
                                </div>
                                <div className="five">
                                    <input type="radio" name="jobType" id="Full-time" onChange={() => handleJobTypeFilter("Full-time")} checked={selectedJobType === "Full-time"} />
                                    <label htmlFor="Full-time"> Full-time </label>
                                </div>
                                <div className="five">
                                    <input type="radio" name="jobType" id="Freelance" onChange={() => handleJobTypeFilter("Freelance/Contract")} checked={selectedJobType === "Freelance/Contract"} />
                                    <label htmlFor="Freelance">  Freelance/Contract</label>
                                </div>
                                <div className="five">
                                    <input type="radio" name="jobType" id="Internship" onChange={() => handleJobTypeFilter("Internship")} checked={selectedJobType === "Internship"} />
                                    <label htmlFor="Internship"> Internship</label>
                                </div>
                                <div className="five">
                                    <input type="radio" name="jobType" id="Part-time" onChange={() => handleJobTypeFilter("Part-time")} checked={selectedJobType === "Part-time"} />
                                    <label htmlFor="Part-time"> Part-time</label>
                                </div>
                            </div>
                            <div className="filter4">
                                <div className="title">
                                    <span>Open to remote</span>
                                    <img src="public/arrow-chevron-up.png" alt="" />
                                </div>
                                <div className="five">
                                    <input type="radio" name="remote" id="remote" onChange={handleRemoteFilter} />
                                    <label htmlFor="remote"> Open to remote</label>
                                </div>
                            </div>
                            <div className="filter5">
                                <div className="title">
                                    <span>Salary</span>
                                    <img src="public/arrow-chevron-up.png" alt="" />
                                </div>
                                <div className="five">
                                    <select name="" id="">
                                        <option value="">$ Min</option>
                                        <option value="min">3000</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">$ Max</option>
                                        <option value="max">5000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJobs;
