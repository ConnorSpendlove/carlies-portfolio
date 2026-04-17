import { StandardSection } from "@/components/StandardSection";

const EXPLANATION = [
  (
    <p key="citizen-overview">
      Educators inspire students to positively contribute to and responsibly participate in the
      digital world.
    </p>
  ),
  (
    <div key="citizen-indicators" className="space-y-2">
      <p className="font-medium text-stone-800">3a. Create Positive Experiences</p>
      <p className="pl-5">
        Educators create experiences for learners to make positive, socially responsible
        contributions and build inclusive communities online.
      </p>
      <p className="font-medium text-stone-800">3b. Evaluate Resources for Credibility</p>
      <p className="pl-5">
        Educators foster digital literacy by encouraging curiosity, reflection, and the critical
        evaluation of digital resources.
      </p>
      <p className="font-medium text-stone-800">3c. Model Safe, Legal, Ethical Practices</p>
      <p className="pl-5">
        Educators mentor students in safe, legal, and ethical practices with digital tools and
        content.
      </p>
      <p className="font-medium text-stone-800">3d. Manage, Protect Data</p>
      <p className="pl-5">
        Educators model and promote management of personal data, digital identity, and protection
        of student data.
      </p>
    </div>
  ),
];

const ARTIFACT = [
  (
    <div key="artifact-description" className="space-y-2">
      <p className="font-medium text-stone-800">Artifact Description:</p>
      <p>
        This artifact is a 4th grade lesson plan focused on digital citizenship, specifically the
        topic “Safe and Kind Online.” The lesson helps students understand how their actions and
        words online can affect others and how to make responsible, respectful choices online.
      </p>
      <p>
        The students participate in a discussion, watch a video on digital citizenship, and then
        apply their learning by posting on a Padlet board and leaving kind comments on their
        classmates&apos; responses. I created this artifact to demonstrate how I would teach students
        about being a digital citizen in an engaging but also age-appropriate way.
      </p>
      <p>
        I also wanted to use technology to support learning, like using Padlet and educational
        videos.
      </p>
    </div>
  ),
];

const REFLECTION = [
  (
    <div key="reflection-rationale" className="space-y-4">
      <p className="font-medium text-stone-800">Reflection/Rationale:</p>
      <p>
        This artifact relates to ISTE Standard 3 because it focuses on teaching students how to be
        responsible, safe, and respectful digital citizens. In the lesson, students learn how their
        online actions can impact others and how to make smart choices online.
      </p>
      <p>
        This connects directly to 3a: Create Positive Experiences, because after the lesson,
        students practice giving kind feedback on a Padlet board.
      </p>
      <p>
        It also aligns with 3c: Model Safe, Legal, Ethical Practices, because the lesson explicitly
        teaches students about digital footprints, online safety, and respectful communication.
        Students learn that their words online can have real consequences and that they should
        always treat people with kindness.
      </p>
      <p>
        Creating this artifact helped me grow as a teacher because it showed me how important it is
        to intentionally teach digital citizenship, not assume students already know it. It also
        helped me see how technology can be used to support both learning and social-emotional
        skills.
      </p>
    </div>
  ),
];

export default function Iste3CitizenPage() {
  return (
    <StandardSection
      title="ISTE 3: Citizen"
      explanation={EXPLANATION}
      artifact={ARTIFACT}
      artifactPlaceholder={
        <a
          href="https://drive.google.com/file/d/1xkGhynNX7ONdO6FWJg0OxBI0YS_JhpmJ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-900 underline underline-offset-2 hover:text-rose-700"
        >
          Digital Citizenship Lesson Plan
        </a>
      }
      reflection={REFLECTION}
    />
  );
}
