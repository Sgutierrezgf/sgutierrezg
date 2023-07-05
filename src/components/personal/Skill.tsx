import React from "react";

function Skill() {
  const skills = [
    { title: "HTML", percent: 95 },
    { title: "CSS", percent: 70 },
    { title: "Tailwind CSS", percent: 50 },
    { title: "React JS", percent: 50 },
    { title: "Javascript", percent: 70 },
    { title: "Typescript", percent: 40 },
    { title: "Next JS", percent: 30 },
  ];

  const [currentSkill, setCurrentSkill] = React.useState(skills[0]);
  return (
    <main className="grid w-full text-gray-100 justify-center place-content-start">
      <section className="p-6 space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0 max-[767px]:grid max-[767px]:justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <button
              key={skill.title}
              onClick={() => setCurrentSkill(skill)}
              className={`px-4 py-2 text-xl text-gray-100 transition bg-orange-600 rounded-md h-14 w-44 hover:bg-red-700 ${
                currentSkill.title === skill.title
                  ? "font-bold ring-2 ring-gray-100"
                  : ""
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="relative flex items-center justify-center">
          <svg className="w-72 h-72">
            <circle
              cx="50%"
              cy="50%"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              className="text-gray-700"
            />

            <circle
              cx="50%"
              cy="50%"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 120}`}
              strokeDashoffset={`${
                2 * Math.PI * 120 -
                (currentSkill.percent / 100) * (2 * Math.PI * 120)
              }`}
              className="text-orange-600"
            />
          </svg>
          <span className="absolute text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            {`${currentSkill.percent}%`}
          </span>
        </div>
      </section>
    </main>
  );
}

export default Skill;
