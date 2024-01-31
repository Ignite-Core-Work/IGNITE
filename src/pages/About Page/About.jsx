import React from "react";
import "./About.css";
import hack from "../../assets/hackathon.jpg";
import tresure from "../../assets/treasure.jpg";
import ideathon from "../../assets/ideathon-activities.jpeg";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  const activityData = [
    {
      title: "Hacathon",
      description:
        "The two days of the 29th and 30th of December were fueled by caffeine and code! The adrenaline rush of brainstorming solutions that could change the world . We lived it because of the EPIC 24-hour hackathon! ",
      image: hack,
    },
    {
      title: "Treasure Hunt",
      description: "The treasure event, held in celebration of World Entrepreneurship Day, saw the active participation of over 400 students. ",
      image: tresure,
    },
    {
      title: "Ideathon",
      description: "Ideathon ",
      image: ideathon,
    },
    // Add more activities as needed
  ];

  return (
    <>
      <Navbar />
      <div className="ac">
        <h1 className="for-heading-in-team">Activities</h1>
        <div className="for-activities">
          {activityData.map((activity, index) => (
            <div key={index} className="activity-card">
              <img
                src={activity.image}
                alt={`Activity ${index + 1}`}
                className="activity-image"
              />
              <div className="activity-content">
                <div className="activity-title">{activity.title}</div>
                <div className="activity-description">
                  {activity.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
