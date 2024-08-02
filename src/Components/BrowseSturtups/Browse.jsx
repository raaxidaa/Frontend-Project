import React, { useState, useEffect } from 'react';
import CompaniesData from './Companies.json';

const Browse = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(CompaniesData);
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedJobType, setSelectedJobType] = useState('');
    const [selectedFunding, setSelectedFunding] = useState(''); 

    useEffect(() => {
        applyFilters(CompaniesData);
    }, [selectedRole, selectedLevel, selectedJobType, searchQuery, locationQuery, selectedFunding]);

    const handleSearch = () => {
        const filteredData = CompaniesData.filter(job =>
            job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (job.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
                locationQuery.toLowerCase().includes(job.location.toLowerCase()))
        );

        applyFilters(filteredData);
    };

    const keywords = [
        "Advertising",
        "Agriculture",
        "Blockchain",
        "Consumer Goods",
        "Education",
        "Energy & Greentech",
        "Fintech",
        "Food & Beverage",
        "Healthcare"
    ];

    const calculateJobCounts = () => {
        const jobCounts = {};
        keywords.forEach(keyword => {
            jobCounts[keyword] = 0;
        });
        CompaniesData.forEach(job => {
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
    };

    const handleLevelFilter = (level) => {
        setSelectedLevel(level);
    };

    const handleJobTypeFilter = (jobType) => {
        setSelectedJobType(jobType);
    };

    const handleRemoteFilter = () => {
        setFilteredJobs(prevJobs =>
            prevJobs.filter(job => job.remoteStatus === "Remote OK")
        );
    };

    const handleClearFilters = () => {
        setSelectedRole('');
        setSelectedLevel('');
        setSearchQuery('');
        setLocationQuery('');
        setSelectedJobType('');
        setSelectedFunding(''); 
        setFilteredJobs(CompaniesData);
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

        if (selectedFunding) {
            filteredData = filteredData.filter(job =>
                job.funding.toLowerCase() === selectedFunding.toLowerCase()
            );
        }

        setFilteredJobs(filteredData);
    };

    return (
        <div className="back">
            <div className='find-jobs container'>
                <div className="search2">
                    <img src="/public/search.png" alt="" />
                    <input type="text" id="search" name="search" placeholder="Company, Job Title..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <img src="/public/map-pin-3.png" alt="" />
                    <input type="text" id="map" name="map" placeholder="City, State, or Country" value={locationQuery} onChange={(e) => setLocationQuery(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="find-jobs-center">
                    <div className="center-left">
                        <div className="title">
                            <h1>Exciting Companies <span>({filteredJobs.length})</span></h1>
                            <button className='newest'>
                                <img src="/public/flashlight.png" alt="" />
                                Newest
                                <img src="/public/arrow-chevron-down.png" alt="" />
                            </button>
                        </div>
                        {filteredJobs.length === 0 ? (
                            <p className='error1'>No companies found matching the entered criteria.</p>
                        ) : (
                            <div className="companies1">
                                {filteredJobs.map(job => (
                                    <div className="comp1" key={job.id}>
                                        <div className="top">
                                            <img src={`/public/${job.images}`} alt={job.companyName} />
                                            <span>{job.companyName}</span>
                                        </div>
                                        <div className="center">
                                            <span>{job.description}</span>
                                        </div>
                                        <div className="bottom">
                                            <button>12 Jobs Available</button>
                                            <img src="/public/arrow-right-up.png" alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="center-right">
                        <div className="center-right-title">
                            <span>Filters</span>
                            <span className='clear' onClick={handleClearFilters}> Clear</span>
                        </div>
                        <div className="filters">
                            <div className="filter1">
                                <div className="title">
                                    <span className='hidden1'>Industry</span>
                                    <img src="/public/arrow-chevron-up.png" alt="" />
                                </div>
                                {keywords.map((keyword, index) => (
                                    <div className="five uno1" key={index}>
                                        <input type="radio" id={keyword} name="roles" onChange={() => handleRoleFilter(keyword)} checked={selectedRole === keyword} />
                                        <label htmlFor={keyword}>
                                            {keyword} <span>({jobCounts[keyword]})</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="filter2">
                                <div className="title">
                                    <span>Startup Stage</span>
                                    <img src="/public/arrow-chevron-up.png" alt="" />
                                </div>
                                <div className="five">
                                    <input type="radio" id="Idea" name="StartupStage" onChange={() => handleLevelFilter("Idea")} checked={selectedLevel === "Idea"} />
                                    <label htmlFor="Idea">Idea</label>
                                </div>
                                <div className="five">
                                    <input type="radio" id="Product-or-prototype" name="StartupStage" onChange={() => handleLevelFilter("Product-or-prototype")} checked={selectedLevel === "Product-or-prototype"} />
                                    <label htmlFor="Product-or-prototype">Product-or-prototype</label>
                                </div>
                                <div className="five">
                                    <input type="radio" id="Go-to-market" name="StartupStage" onChange={() => handleLevelFilter("Go-to-market")} checked={selectedLevel === "Go-to-market"} />
                                    <label htmlFor="Go-to-market">Go-to-market</label>
                                </div>
                                <div className="five">
                                    <input type="radio" id="Growth-and-expansion" name="StartupStage" onChange={() => handleLevelFilter("Growth-and-expansion")} checked={selectedLevel === "Growth-and-expansion"} />
                                    <label htmlFor="Growth-and-expansion">Growth-and-expansion</label>
                                </div>
                            </div>
                            <div className="filter3">
                                <div className="title">
                                    <span>Startup Size</span>
                                    <img src="/public/arrow-chevron-up.png" alt="" />
                                </div>
                                <div className="five">
                                    <input type="radio" id="on" name="StartupSize" onChange={() => handleJobTypeFilter("1-10")} checked={selectedJobType === "1-10"} />
                                    <label htmlFor="on">1-10</label>
                                </div>
                                <div className="five">
                                    <input type="radio" id="elli" name="StartupSize" onChange={() => handleJobTypeFilter("51-100")} checked={selectedJobType === "51-100"} />
                                    <label htmlFor="elli">51-100</label>
                                </div>
                                <div className="five">
                                    <input type="radio" id="yuz" name="StartupSize" onChange={() => handleJobTypeFilter("101-200")} checked={selectedJobType === "101-200"} />
                                    <label htmlFor="yuz">101-200</label>
                                </div>
                                <div className="five">
                                    <input type="radio" id="ikiyuz" name="StartupSize" onChange={() => handleJobTypeFilter("200+")} checked={selectedJobType === "200+"} />
                                    <label htmlFor="ikiyuz">200+</label>
                                </div>
                            </div>
                            <div className="filter4">
                                <div className="title">
                                    <span>Open to remote</span>
                                    <img src="/public/arrow-chevron-up.png" alt="" />
                                </div>
                                <div className="five">
                                    <input type="radio" id="remote" name="remote" onChange={handleRemoteFilter} />
                                    <label htmlFor="remote">Open to remote</label>
                                </div>
                            </div>
                            <div className="filter5">
                                <div className="title">
                                    <span>Funding</span>
                                    <img src="/public/arrow-chevron-up.png" alt="" />
                                </div>
                                <div className="five">
                                    <input type="radio" id="Currently" name="funding" onChange={() => setSelectedFunding('Currently not looking for funding')} checked={selectedFunding === 'Currently not looking for funding'} />
                                    <label htmlFor="Currently">Currently not looking for funding</label>
                                </div>
                                <div className="five">
                                    <input type="radio" id="Looking for funding" name="funding" onChange={() => setSelectedFunding('Looking for funding')} checked={selectedFunding === 'Looking for funding'} />
                                    <label htmlFor="Looking for funding">Looking for funding</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Browse;
