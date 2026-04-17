import { StandardSection } from "@/components/StandardSection";

const EXPLANATION = [
  (
    <p key="facilitator-overview">
      Educators facilitate learning with technology to support student achievement of the 2016
      ISTE Standards for Students.
    </p>
  ),
  (
    <div key="facilitator-indicators" className="space-y-2">
      <p className="font-medium text-stone-800">6a. Foster Student Ownership of Learning</p>
      <p className="pl-5">
        Educators foster a culture where students take ownership of their learning goals and
        outcomes in both independent and group settings.
      </p>
      <p className="font-medium text-stone-800">6b. Foster Classroom Management of Tech</p>
      <p className="pl-5">
        Educators manage the use of technology and student learning strategies in digital
        platforms, virtual environments, hands-on makerspaces or in the field.
      </p>
      <p className="font-medium text-stone-800">6c. Teach Computational and Design Thinking</p>
      <p className="pl-5">
        Educators create learning opportunities that challenge students to use a design process and
        computational thinking to innovate and solve problems.
      </p>
      <p className="font-medium text-stone-800">6d. Model and Nurture Creativity</p>
      <p className="pl-5">
        Educators model and nurture creativity and creative expression to communicate ideas,
        knowledge or connections.
      </p>
    </div>
  ),
];

const ARTIFACT = [
  (
    <div key="artifact-description" className="space-y-2">
      <p>
        This artifact is an ASSURE lesson plan that uses the flipped learning model to teach 1st
        grade students phonological awareness. Students practice adding, deleting, and substituting
        sounds in single-syllable words, including blends. The lesson includes both an individual learning portion, where students watch a screencast
        video lecture at home or in class with headphones, and a group learning portion, where they
        will work in small groups and use Elkonin boxes and manipulatives, and do some phoneme
        games. I created this artifact to learn how to design a structured lesson using the ASSURE model
        and to better understand how technology can be used to support instruction. I also learned
        how to use a flipped learning model.
      </p>
    </div>
  ),
];

const REFLECTION = [
  (
    <div key="reflection-rationale" className="space-y-4">
      <p>
        This artifact relates to ISTE Standard 6 because it shows how I would use technology to
        help support student learning. It connects to 6a: Foster Student Ownership of Learning
        because students are responsible for their own learning during the flipped lesson. In the individual part, students watch a screencast video and practice phonological
        awareness skills at their own pace. They have to engage with the lesson on their own before
        coming to group activities, which helps them build independence and take ownership of their
        learning. It also connects to 6c: Teach Computational and Design Thinking because students are
        working with sounds in words and figuring out how changing one sound creates a new word.
        This helps them practice problem-solving and thinking step by step in a structured way.
      </p>
      <p>
        Creating this artifact helped me see how technology can support students working
        independently while still allowing time for group work and hands-on practice. It also
        helped me understand how to plan lessons that are more organized and keep students engaged
        in different ways.
      </p>
    </div>
  ),
];

export default function Iste6FacilitatorPage() {
  return (
    <StandardSection
      title="ISTE 6: Facilitator"
      explanation={EXPLANATION}
      artifact={ARTIFACT}
      artifactPlaceholder={
        <a
          href="https://drive.google.com/file/d/1j16au58ulHa36izSzN6Vz6PHmHpfov9F/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-900 underline underline-offset-2 hover:text-rose-700"
        >
          Flipped Lessons with ASSURE Model
        </a>
      }
      reflection={REFLECTION}
    />
  );
}
