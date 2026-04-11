import Image from "next/image";

const introLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.`;

const philosophyLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.

Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.

Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.

Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.`;

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
