import React from 'react'

const ThreePage = () => {
  return (
    <div className="Three">
        <h2>What You Get</h2>
        <img src="/public/Vector 1.png" alt="" />
        <div className="centers">
            <div className="center1">
                <img src="/public/user.png" alt="" />
                <span>Maximise exposure</span>
                <p>Be visible to high-potential startups looking for funding in your region, exclusively. Let the Unicorns, the Zebras and the species of tomorrow come to you</p>
            </div>
            <div className="center2">
                <img src="/public/bell.png" alt="" />
                <span>Free referrals</span>
                <p>Let your portfolio startups walk the talk for you by adding you as their trusted investor</p>
            </div>
            <div className="center3">
                <img src="/public/airplay1.png" alt="" />
                <span>Free matchmaking</span>
                <p>Startups get matched with you based on stage, industry, location, business model and ticket size</p>
            </div>
            <div className="center4">
                <img src="/bell.png" alt="" />
                <span>Startup browsing</span>
                <p>The Hub is where startups grow! Take a look yourself and bookmark your favorites for future reference</p>
            </div>
        </div>
        <button>Browse Startups</button>
    </div>
  )
}

export default ThreePage