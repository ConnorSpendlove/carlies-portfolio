import { StandardSection } from "@/components/StandardSection";

const EXPLANATION = [
  (
    <p key="collaborator-overview">
      Educators dedicate time to collaborate with both colleagues and students to improve practice,
      discover and share resources and ideas, and solve problems.
    </p>
  ),
  (
    <div key="collaborator-indicators" className="space-y-2">
      <p className="font-medium text-stone-800">4a. Collaborate with Colleagues</p>
      <p className="pl-5">
        Educators dedicate planning time to collaborate with colleagues to create authentic
        learning experiences that leverage technology.
      </p>
      <p className="font-medium text-stone-800">4b. Learn Alongside Students</p>
      <p className="pl-5">
        Educators collaborate and co-learn with students to discover and use new digital
        resources, and diagnose and troubleshoot technology issues.
      </p>
      <p className="font-medium text-stone-800">4c. Use Collaborative Tools</p>
      <p className="pl-5">
        Educators use collaborative tools to expand students&apos; authentic, real-world learning
        experiences by engaging virtually with experts, teams and students, locally and globally.
      </p>
      <p className="font-medium text-stone-800">4d. Empower Community to Support Students</p>
      <p className="pl-5">
        Educators use technology to convene and empower a broad community including families, school
        leaders, and mentors to help students achieve their learning goals.
      </p>
    </div>
  ),
];

const ARTIFACT = [
  (
    <div key="artifact-description" className="space-y-2">
      <p className="font-medium text-stone-800">Artifact Description:</p>
      <p>
        This artifact is a global collaboration project designed for 2nd grade social studies. For
        this activity, students will create a “My Day” portfolio that includes drawings, pictures,
        and short writing that show and explain their lives.
      </p>
      <p>
        Students in Germany will do the same, and then we will share our work with each other and
        compare routines, and some similarities and differences. I created this artifact to show
        how I can use global collaboration to help students learn about the world and different
        people.
      </p>
      <p>
        It will also help them build communication and social skills. This project also shows how
        technology can be used to connect classrooms and support learning beyond just our local
        environment.
      </p>
    </div>
  ),
];

const REFLECTION = [
  (
    <div key="reflection-rationale" className="space-y-4">
      <p className="font-medium text-stone-800">Reflection/Rationale:</p>
      <p>
        This artifact connects to ISTE Standard 4 because it focuses on using collaboration to
        expand student learning beyond the classroom. It especially aligns with 4c: Use
        Collaborative Tools, which emphasizes engaging with students globally to create real-world
        learning experiences.
      </p>
      <p>
        This lesson gives students the chance to observe other people and reflect on similarities
        and differences that we have. This project also supports collaboration by encouraging
        students to share their own lives.
      </p>
      <p>
        Creating this artifact really taught me a lot and pushed me to think about how to plan
        global collaboration for students that is realistic. I was able to learn about different
        resources to connect with teachers around the world who want to do similar activities.
      </p>
      <p>
        I also learned a lot about what goes into planning these kinds of activities. I also had to
        make sure the activity was safe and communicate with parents to get their help and make
        sure they are okay with students taking and sharing pictures. Overall, this project showed
        me how powerful collaboration can be in helping students learn in significant ways.
      </p>
    </div>
  ),
];

export default function Iste4CollaboratorPage() {
  return (
    <StandardSection
      title="ISTE 4: Collaborator"
      explanation={EXPLANATION}
      artifact={ARTIFACT}
      artifactPlaceholder={
        <a
          href="https://drive.google.com/file/d/1bPU-wbom7YEyERysYPw-qEdr8ny3OeDp/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-900 underline underline-offset-2 hover:text-rose-700"
        >
          Global Collaboration Project
        </a>
      }
      reflection={REFLECTION}
    />
  );
}
