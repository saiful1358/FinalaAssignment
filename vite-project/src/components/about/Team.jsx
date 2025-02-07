import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const teamMembers = [
  { id: 1, name: "John Doe", role: "Full Stack Developer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YWJrLYtPPg3CkBPee6m68omPJHHNvi0Kvw&s" },
  { id: 2, name: "Jane Smith", role: "UI/UX Designer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZP0uO36FlKPKrAPzyECDfdYkSYZcp3JpXrOk0VTGaH66CfhuQFBw9x3WdEk5GUm9XBQ&usqp=CAU" },
  { id: 3, name: "Mike Johnson", role: "Backend Developer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YWJrLYtPPg3CkBPee6m68omPJHHNvi0Kvw&s" },
  { id: 4, name: "Emma Brown", role: "Project Manager", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YWJrLYtPPg3CkBPee6m68omPJHHNvi0Kvw&s" },
  { id: 5, name: "Robert Green", role: "Frontend Developer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YWJrLYtPPg3CkBPee6m68omPJHHNvi0Kvw&s" },
  { id: 6, name: "Sophia White", role: "QA Engineer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YWJrLYtPPg3CkBPee6m68omPJHHNvi0Kvw&s" },
];

const TeamSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleMembers = teamMembers.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % teamMembers.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 3 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-primary" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <div className="row w-100">
          {visibleMembers.map((member) => (
            <div key={member.id} className="col-md-4 col-sm-12 mb-4">
              <motion.div className="card text-center shadow" whileHover={{ scale: 1.05 }}>
                <img src={member.image} className="card-img-top" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
