import Image from "next/image";

const introLorem = `This website is a collection of my work that's focused on using technology in the classroom. It is organized into pages that each connect to the ISTE standards. On each page, you will find a standard, an example of an artifact I created, and a reflection explaining how it connects to teaching and learning. This portfolio shows how I used technology to support students and grow as a future teacher.
`;

const philosophyLorem = `I believe the purpose of education is to support the development of all learners so they can be responsible, creative, and productive in society. School teaches academics, but it also helps students build skills, confidence, and independence. I also believe that the classroom should be built around creativity and collaboration. Students learn best when they are actively involved and working with others. Collaboration helps students build social skills and learn from different perspectives. I think this is very important. ​​I also want my classroom to allow and encourage students to express themselves. When students are given the opportunity to be creative, they become more engaged in their learning. 
Every student comes into the classroom with different backgrounds, experiences, and challenges, and I believe those differences should be recognized and valued, not ignored. All students deserve equal opportunity to succeed, even if that does not look the same for everyone. Some students may need more support, different strategies, or extra time, and that is okay. My job and responsibility as an educator is to meet students where they are and help them grow from there. I also understand that some students may be dealing with challenges outside of school that can impact their learning. Because of this, I want to create a classroom that is consistent, supportive, and safe. When students are dealing with stress, trauma, difficult situations at home, etc. they may not act like themselves or perform at their best. I want to help students feel like they have a place where they are cared. 
​ ​My goal is for students to not only learn, but to enjoy learning and carry that with them beyond the classroom.
`;

export default function Home() {
  const philosophyParagraphs = philosophyLorem.split("\n\n");

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="border-b border-rose-200/90 pb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-rose-800">Welcome</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          My Professional Teacher Portfolio
        </h1>
      </header>

      <section
        className="mt-10 grid grid-cols-1 items-start gap-8 text-center lg:grid-cols-2 lg:gap-12 lg:text-left"
        aria-labelledby="intro-heading"
      >
        <div className="flex justify-center lg:justify-end lg:pr-2">
          <div className="relative aspect-[4/5] w-full max-w-[min(100%,16rem)] shrink-0 overflow-hidden rounded-2xl bg-rose-100 shadow-lg shadow-rose-900/10 ring-4 ring-rose-100/90 sm:max-w-[18rem]">
            <Image
              src="/headshot.JPG"
              alt="Professional headshot"
              fill
              className="object-cover object-[50%_95%]"
              sizes="(max-width: 1024px) 256px, 288px"
              priority
            />
          </div>
        </div>
        <div className="min-w-0 space-y-4">
          <h2
            id="intro-heading"
            className="text-xl font-semibold text-stone-900 lg:text-2xl"
          >
            Introduction
          </h2>
          <p className="text-base leading-relaxed text-stone-700">{introLorem}</p>
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-rose-200/80 bg-white p-6 text-center shadow-sm shadow-rose-900/5 sm:p-10">
        <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-rose-400" aria-hidden />
        <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">Teaching Philosophy</h2>
        <div className="mx-auto mt-6 max-w-4xl space-y-4 text-left text-base leading-relaxed text-stone-700">
          {philosophyParagraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
