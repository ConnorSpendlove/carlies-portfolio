import { CcLicenseSymbols } from "@/components/CcLicenseSymbols";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rose-200/90 bg-white/80">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 text-center sm:px-6 sm:text-left lg:px-8">
        <div className="space-y-3">
          <a
            rel="license"
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            aria-label="Creative Commons Attribution-NonCommercial 4.0 International"
            className="inline-flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3"
          >
            <CcLicenseSymbols />
          </a>
          <p className="text-xs leading-relaxed text-stone-600">
            This work is licensed under a{" "}
            <a
              rel="license"
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              className="font-medium text-rose-950 underline-offset-2 hover:underline"
            >
              Creative Commons Attribution-NonCommercial 4.0 International License
            </a>
            .
          </p>
        </div>

        <p className="text-xs leading-relaxed text-stone-600">
          All images inserted in this site are my personal photos.
        </p>

        <p className="text-xs leading-relaxed text-stone-600">
          ISTE Standards for Educators, ©2017, ISTE (International Society for Technology in
          Education),{" "}
          <a
            href="https://www.iste.org"
            className="font-medium text-rose-950 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            iste.org
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
