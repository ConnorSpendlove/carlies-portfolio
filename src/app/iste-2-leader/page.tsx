import { StandardSection } from "@/components/StandardSection";

const EXPLANATION = [
  (
    <p key="leader-overview">
      Educators seek opportunities for leadership to support student empowerment and
      success and to improve teaching and learning.
    </p>
  ),
  (
    <div key="leader-indicators" className="space-y-2">
      <p className="font-medium text-stone-800">2a. Advance a Shared Vision</p>
      <p className="pl-5">
        Educators shape, advance and accelerate a shared vision for empowered learning with
        technology by engaging with education stakeholders.
      </p>
      <p className="font-medium text-stone-800">2b. Advocate for Access</p>
      <p className="pl-5">
        Educators advocate for equitable access to technology, high-quality digital content, and
        learning opportunities to meet the diverse needs of all students.
      </p>
      <p className="font-medium text-stone-800">2c. Model Digital Tool Use</p>
      <p className="pl-5">
        Educators model for colleagues the identification, exploration, evaluation, curation and
        adoption of new digital resources and tools for learning.
      </p>
    </div>
  ),
];

const REFLECTION = [
  (
    <div key="leader-reflection" className="space-y-3">
      <p className="font-medium text-stone-800">My Plan to Meet this Standard</p>
      <p>
        One specific way I plan to meet Standard 2a: Advance a Shared Vision is by working with
        other teachers, administrators, and even families to share a vision of how we can use
        technology to improve student learning.
      </p>
      <p>
        I want to be part of conversations at my school about how technology is being used. I also
        think it is important to have consistency in how digital tools are used across classrooms.
        This will help students have clear expectations.
      </p>
      <p>
        I plan to meet Standard 2b: Advocate for Access by making sure all students have equal
        opportunities to use technology. I know that not all students will have access to devices
        or the internet at home. It&apos;s important to be aware of that fact and to plan accordingly
        as much as possible.
      </p>
      <p>
        I will avoid assigning work that requires technology outside of school, and instead, I will
        focus on giving students time in the classroom to use technology. I will also look for
        digital tools that support different learning needs, so all students can participate and
        succeed.
      </p>
    </div>
  ),
];

export default function Iste2LeaderPage() {
  return (
    <StandardSection
      title="ISTE 2: Leader"
      explanation={EXPLANATION}
      reflection={REFLECTION}
    />
  );
}
