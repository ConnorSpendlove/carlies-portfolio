import { StandardSection } from "@/components/StandardSection";

const EXPLANATION = [
  (
    <p key="analyst-overview">
      Educators understand and use data to drive their instruction and support students in
      achieving their learning goals.
    </p>
  ),
  (
    <div key="analyst-indicators" className="space-y-2">
      <p className="font-medium text-stone-800">7a. Offer Alternative Assessments</p>
      <p className="pl-5">
        Educators provide alternative ways for students to demonstrate competency and reflect on
        their learning using technology.
      </p>
      <p className="font-medium text-stone-800">7b. Use Tech to Create Assessments</p>
      <p className="pl-5">
        Educators use technology to design and implement a variety of formative and summative
        assessments that accommodate learner needs, provide timely feedback to students and inform
        instruction.
      </p>
      <p className="font-medium text-stone-800">7c. Use Data to Guide Progress</p>
      <p className="pl-5">
        Educators use assessment data to guide progress, personalize learning, and communicate
        feedback to education stakeholders in support of students reaching their learning goals.
      </p>
    </div>
  ),
];

const ARTIFACT = [
  (
    <div key="artifact-description" className="space-y-2">
      <p className="font-medium text-stone-800">Artifact Description:</p>
      <p>
        This artifact is an interactive video created using Edpuzzle about the solar system.
        Edpuzzle is a website that has many videos you can use and adapt, and you can also upload
        your own videos.
      </p>
      <p>
        I added my own questions to Homeschools Pop&apos;s video “Planets of our Solar System for
        Kids” for students to answer as they watch. This turns the video into an active tool and
        assessment. This helps keep students engaged and also allows me to check their understanding
        as they go.
      </p>
      <p>
        I created this artifact to practice using different digital tools that can make lessons
        more engaging. It showed me how videos can be turned into lessons by adding checkpoints.
      </p>
    </div>
  ),
];

const REFLECTION = [
  (
    <div key="reflection-rationale" className="space-y-4">
      <p className="font-medium text-stone-800">Reflection/Rationale:</p>
      <p>
        This artifact relates to ISTE Standard 7 because it shows how technology can be used to
        support assessment and help guide learning. It connects to 7b: Use Tech to Create
        Assessments because I used Edpuzzle to turn a video into an assessment with questions built
        in.
      </p>
      <p>
        Instead of just watching a video, students will answer questions as they watch to make it a
        kind of formative assessment. This also helps me see right away how students are doing and
        what they understand, which supports 7c: Use Data to Guide Progress.
      </p>
      <p>
        It also connects to 7a: Offer Alternative Assessments because students are not just taking
        a paper test. Something I really like about this is that if a student needs more support,
        they can rewatch parts, which helps meet different learners&apos; needs.
      </p>
      <p>
        Creating this artifact helped me see how assessment can be more interactive. It&apos;s also a
        great reminder that assessments are not just about grading, and you should use them to
        check understanding so we can help students grow.
      </p>
    </div>
  ),
];

export default function Iste7AnalystPage() {
  return (
    <StandardSection
      title="ISTE 7: Analyst"
      explanation={EXPLANATION}
      artifact={ARTIFACT}
      artifactPlaceholder={
        <a
          href="https://edpuzzle.com/media/699b5c8ca0e69e854135728a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-900 underline underline-offset-2 hover:text-rose-700"
        >
          Edpuzzle Interactive Video
        </a>
      }
      reflection={REFLECTION}
    />
  );
}
