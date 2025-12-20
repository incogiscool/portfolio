import WorkCard from "./components/WorkCard";
import EducationCard from "./components/EducationCard";
import SideQuestCard from "./components/SideQuestCard";
import BentoGrid from "./components/BentoGrid";
import { work, education, sideQuests } from "./lib/const";

function App() {
  return (
    <div className="p-8 space-y-6">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-2">
          <div className="space-y-4">
            <h1>adam el taha</h1>

            <h3>19 | building cool stuff and meeting cool people</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/incogiscool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                github
              </a>
              <span>/</span>
              <a
                href="https://www.linkedin.com/in/adameltaha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                linkedin
              </a>

              <span>/</span>
              <a
                href="mailto:eltaha.adam8@gmail.com"
                className="text-blue-500 hover:underline"
              >
                email
              </a>
            </div>
          </div>

          <section className="space-y-2 mt-6">
            <h2>Work</h2>
            <div>
              {work.map((item) => (
                <WorkCard key={item.title} work={item} />
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-3 relative">
          <BentoGrid className="absolute inset-0" />
        </div>
      </div>

      <section className="space-y-2">
        <h2>Side Quests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {sideQuests.map((item) => (
            <SideQuestCard key={item.title} sideQuest={item} />
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2>Education</h2>
        <div>
          {education.map((item) => (
            <EducationCard
              key={item.school}
              education={item}
              className="max-w-100"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
