"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { mainNav } from "@/lib/nav";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden>
      <span
        className={`absolute left-0 top-1 block h-0.5 w-6 rounded-full bg-current transition-transform ${
          open ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-current transition-opacity ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-4 block h-0.5 w-6 rounded-full bg-current transition-transform ${
          open ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function navLinkClass(active: boolean) {
  return `text-sm font-medium underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 lg:text-base ${
    active
      ? "font-semibold text-rose-900 underline decoration-rose-300"
      : "text-stone-700 decoration-transparent hover:text-rose-900 hover:underline"
  }`;
}

function MobileDrawer({
  open,
  panelId,
  pathname,
  onClose,
}: {
  open: boolean;
  panelId: string;
  pathname: string;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!mounted) return null;

  const drawer = (
    <>
      <div
        className={`fixed inset-0 z-[200] bg-stone-900/50 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={onClose}
      />
      <nav
        id={panelId}
        aria-label="Main navigation"
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-[201] flex h-full w-[min(100%,20rem)] flex-col border-l border-rose-100 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between border-b border-rose-100 px-4 py-4">
          <p className="text-sm font-semibold text-stone-900">Menu</p>
          <button
            type="button"
            className="rounded-md px-2 py-1 text-sm font-medium text-rose-900 hover:bg-rose-50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto px-2 py-3">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href} className="border-b border-rose-50 last:border-b-0">
                <Link
                  href={item.href}
                  className={`block px-3 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose-600 ${
                    active ? "text-rose-900" : "text-stone-700 hover:text-rose-900"
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );

  return createPortal(drawer, document.body);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-b border-rose-200/90 bg-white/90 shadow-sm shadow-rose-900/5 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <p className="text-center text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">
          Teacher ePortfolio
        </p>

        <div className="relative mt-4 flex min-h-[2.75rem] items-center justify-center md:mt-3">
          <nav
            aria-label="Main navigation"
            className="hidden w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 md:flex"
          >
            {mainNav.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <span key={item.href} className="flex items-center gap-x-3">
                  {index > 0 ? (
                    <span className="select-none text-stone-300" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <Link href={item.href} className={navLinkClass(active)}>
                    {item.label}
                  </Link>
                </span>
              );
            })}
          </nav>

          <button
            type="button"
            className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-rose-200 bg-white text-rose-900 shadow-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      <MobileDrawer
        open={open}
        panelId={panelId}
        pathname={pathname}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}
