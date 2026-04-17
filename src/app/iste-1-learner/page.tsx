import { StandardSection } from "@/components/StandardSection";

const EXPLANATION = [
  (
    <p key="learner-overview">
      Educators continually improve their practice by learning from and with others,
      and exploring proven and promising practices that leverage technology to improve student
      learning.
    </p>
  ),
  (
    <div key="learner-indicators" className="space-y-2">
      <p className="font-medium text-stone-800">1a. Set Professional Goals</p>
      <p className="pl-5">
        Educators set professional learning goals to apply teaching practices made possible by
        technology, explore promising innovations, and reflect on their effectiveness.
      </p>
      <p className="font-medium text-stone-800">1b. Participate in PLNs</p>
      <p className="pl-5">
        Educators pursue professional interests by creating and actively participating in local and
        global learning networks.
      </p>
      <p className="font-medium text-stone-800">1c. Keep Current on Research</p>
      <p className="pl-5">
        Educators stay current with research that supports improved student learning outcomes,
        including findings from the learning sciences.
      </p>
    </div>
  ),
];

const ARTIFACT = [
  (
    <div key="artifact-description" className="space-y-2">
      <p>
        This artifact is a collection of professional learning resources that I found and shared
        from different educators and organizations. On Twitter, I was able to find and share some
        resources for elementary literacy instruction and student engagement. I created this artifact so that I can learn about and reflect on research-based teaching
        practices that I can use in my future classroom. It is always helpful to hear and see what
        educators are trying and sharing through different online platforms and professional
        learning networks.
      </p>
  
    </div>
  ),
];

const REFLECTION = [
  (
    <div key="reflection-rationale" className="space-y-4">
      <p>
        This artifact relates to ISTE Standard 1 because it shows how educators are continually
        learning and improving. On Twitter, I was able to learn from others and explore proven and
        promising practices that use technology to improve student learning. This assignment helped me see how important it is for teachers to keep growing and not
        rely on one way, and instead always be learning new strategies and reflecting on what works
        best for students. This artifact also connects to 1a: Set Professional Goals because it
        helped me think about how I want to use technology and research-based strategies in my
        class. Exploring different tools and literacy practices made me want to set goals for myself, such
        as using hands-on learning and structured literacy strategies. It also connects to 1b:
        Participate in PLNs because I engaged with professional learning networks by looking at
        educators and organizations. Sharing ideas online allows teachers to learn from each other
        globally.
      </p>
    </div>
  ),
];

export default function Iste1LearnerPage() {
  return (
    <StandardSection
      title="ISTE Standards for Educators 1: Learner"
      explanation={EXPLANATION}
      artifact={ARTIFACT}
      artifactPlaceholder={
        <a
          href="https://drive.google.com/file/d/15AQKs9xywhP0zok2ZUYTY_Ye48kr8wo2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-900 underline underline-offset-2 hover:text-rose-700"
        >
          Developing Professional Learning Networks
        </a>
      }
      reflection={REFLECTION}
    />
  );
}
