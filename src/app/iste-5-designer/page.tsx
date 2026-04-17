import { StandardSection } from "@/components/StandardSection";

const EXPLANATION = [
  (
    <p key="designer-overview">
      Educators design authentic, learner-driven activities and opportunities that use technology
      to accommodate learner variability.
    </p>
  ),
  (
    <div key="designer-indicators" className="space-y-2">
      <p className="font-medium text-stone-800">5a. Accommodate Learner Differences</p>
      <p className="pl-5">
        Educators use technology to create, adapt and personalize learning experiences that foster
        independent learning and accommodate learner differences and needs.
      </p>
      <p className="font-medium text-stone-800">5b. Design Authentic Learning Activities</p>
      <p className="pl-5">
        Educators design authentic learning activities that incorporate technology to advance
        student outcomes and develop opportunities for students to apply their knowledge.
      </p>
      <p className="font-medium text-stone-800">5c. Innovative Learning Environments</p>
      <p className="pl-5">
        Educators apply evidence-based instructional design principles to create innovative and
        equitable digital learning environments that support learning.
      </p>
    </div>
  ),
];

const ARTIFACT = [
  (
    <div key="artifact-description" className="space-y-2">
      <p className="font-medium text-stone-800">Artifact Description:</p>
      <p>
        This artifact is an infographic I created using Venngage called “All About Me.” It is
        designed for elementary students K-3 to shares information using pictures and short text.
      </p>
      <p>
        The purpose of the infographic is to introduce myself to students and families at the
        beginning of the year. I created this artifact to learn how to use Venngage and practice
        designing an infographic that could be used in my future classroom.
      </p>
      <p>
        Through this assignment, I became more comfortable using digital design apps. I think that
        infographics are a fun way to communicate information.
      </p>
    </div>
  ),
];

const REFLECTION = [
  (
    <div key="reflection-rationale" className="space-y-4">
      <p className="font-medium text-stone-800">Reflection/Rationale:</p>
      <p>
        This artifact connects to ISTE Standard 5 because it focuses on designing digital learning
        experiences that are supportive for students. It especially relates to 5a: Design Authentic
        Learning Activities, because the infographic can be used to introduce myself to students and
        families and help build classroom community at the beginning of the year.
      </p>
      <p>
        It also connects to 5b: Accommodate Learner Differences, because infographics combine
        visuals and text that makes the information easier for different learners to understand and
        access.
      </p>
      <p>
        Creating this artifact taught me how my design choices can impact student understanding. How
        images and text are arranged, along with color choices and font size, can either support
        learning or become a distraction.
      </p>
      <p>
        It also helped me become more comfortable using digital tools like Venngage to create
        materials for my future classroom. This assignment showed me how to use digital technology
        and intentional design to better support student learning and communication in meaningful
        ways.
      </p>
    </div>
  ),
];

export default function Iste5DesignerPage() {
  return (
    <StandardSection
      title="ISTE 5: Designer"
      explanation={EXPLANATION}
      artifact={ARTIFACT}
      artifactPlaceholder={
        <a
          href="https://drive.google.com/file/d/1oMdZa-3qPb8qpk4E7SQSyXeT8BvtOjMW/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-900 underline underline-offset-2 hover:text-rose-700"
        >
          Creating Infographics
        </a>
      }
      reflection={REFLECTION}
    />
  );
}
