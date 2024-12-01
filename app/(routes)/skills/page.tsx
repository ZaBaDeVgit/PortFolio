'use client';

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import { useEffect, useState, useMemo } from 'react';

const SkillsPage = () => {
  const skills = useMemo(() => [
    { name: "Java SE", percentage: 80, color: "#F16529" },
    { name: "Java EE", percentage: 70, color: "#2965F1" },
    { name: "JavaScript", percentage: 90, color: "#F7DF1E" },
    { name: "React", percentage: 85, color: "#61DAFB" },
    { name: "Angular", percentage: 75, color: "#DD0031" },
    { name: "Vite", percentage: 80, color: "#646CFF" },
    { name: "Android", percentage: 70, color: "#3DDC84" },
    { name: "SQL", percentage: 85, color: "#00758F" },
    { name: "PHP", percentage: 65, color: "#777BB3" },
    { name: "C#", percentage: 80, color: "#9B4F96" },
    { name: "C++", percentage: 75, color: "#00599C" },
    { name: "C", percentage: 90, color: "#A8B9CC" },
  ], []);

  const [progress, setProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    skills.forEach((skill) => {
      let currentPercentage = 0;
      const targetPercentage = skill.percentage;
      const increment = targetPercentage / 40; // Ajusta para progresión sincronizada
      const intervalTime = 25; // Intervalo para una animación suave

      const intervalId = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= targetPercentage) {
          clearInterval(intervalId);
          currentPercentage = targetPercentage;
        }
        setProgress((prev) => ({
          ...prev,
          [skill.name]: Math.round(currentPercentage),
        }));
      }, intervalTime);
    });
  }, [skills]);

  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="skills-container">
        <h1 className="skills-title">
          Mis <span className="font-bold text-secondary">Skills</span>
        </h1>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{progress[skill.name] || 0}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: `${progress[skill.name] || 0}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          padding-top:10rem;
        }

        .skills-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .text-secondary {
          color: #ff4b2b;
        }

        .skills-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid */
          gap: 2rem;
          width: 100%;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          width: 100%;
          text-align: center;
        }

        .skill-bar {
          background-color: #e2e8f0;
          height: 15px;
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); /* Efecto 3D */
          width: 100%;
        }

        .skill-progress {
          height: 100%;
          border-radius: 9999px;
          transition: width ${skills.length * 0.02}s ease-out;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Efecto 3D */
        }

        @media (max-width: 768px) {
          .skills-list {
            grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
          }
        }
      `}</style>
    </>
  );
};

export default SkillsPage;
