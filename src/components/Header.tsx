"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, User, Briefcase } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="w-full border-b border-black/5 bg-background text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-6">
        <div className="flex items-center space-x-30">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo-dark.png"
                alt="crowd logo"
                width={100}
                height={28}
                priority
              />
            </Link>
          </div>

          {/* Center: Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium hover:opacity-80">
                Investir <ChevronDown size={16} className="opacity-70" />
              </button>
              <div className="invisible absolute left-0 top-full mt-2 min-w-40 rounded-md border bg-white p-2 opacity-0 shadow-md transition group-hover:visible group-hover:opacity-100">
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Immobilier
                </Link>
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Startups
                </Link>
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Énergies
                </Link>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium hover:opacity-80">
                À propos <ChevronDown size={16} className="opacity-70" />
              </button>
              <div className="invisible absolute left-0 top-full mt-2 min-w-40 rounded-md border bg-white p-2 opacity-0 shadow-md transition group-hover:visible group-hover:opacity-100">
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Notre mission
                </Link>
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Équipe
                </Link>
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Presse
                </Link>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium hover:opacity-80">
                Guides <ChevronDown size={16} className="opacity-70" />
              </button>
              <div className="invisible absolute left-0 top-full mt-2 min-w-40 rounded-md border bg-white p-2 opacity-0 shadow-md transition group-hover:visible group-hover:opacity-100">
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Commencer
                </Link>
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Fiscalité
                </Link>
                <Link
                  href="#"
                  className="block rounded px-3 py-2 text-sm hover:bg-black/5"
                >
                  Sécurité
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            Portfolio
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-2 text-sm font-medium">
              Cristobal A. <ChevronDown size={16} className="opacity-70" />
            </button>
            <div className="invisible absolute right-0 top-full mt-2 min-w-44 rounded-md border bg-white p-2 opacity-0 shadow-md transition group-hover:visible group-hover:opacity-100">
              <Link
                href="#"
                className="block rounded px-3 py-2 text-sm hover:bg-black/5"
              >
                Profil
              </Link>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-sm hover:bg-black/5"
              >
                Paramètres
              </Link>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-sm hover:bg-black/5"
              >
                Déconnexion
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md border px-3 py-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpenMobile((v) => !v)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile nav */}
      {openMobile && (
        <div className="border-t md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
            <div className="grid gap-4">
              <details>
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                  Investir <ChevronDown size={16} />
                </summary>
                <div className="mt-2 grid gap-2 pl-3">
                  <Link href="#" className="text-sm opacity-90">
                    Immobilier
                  </Link>
                  <Link href="#" className="text-sm opacity-90">
                    Startups
                  </Link>
                  <Link href="#" className="text-sm opacity-90">
                    Énergies
                  </Link>
                </div>
              </details>
              <details>
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                  À propos <ChevronDown size={16} />
                </summary>
                <div className="mt-2 grid gap-2 pl-3">
                  <Link href="#" className="text-sm opacity-90">
                    Notre mission
                  </Link>
                  <Link href="#" className="text-sm opacity-90">
                    Équipe
                  </Link>
                  <Link href="#" className="text-sm opacity-90">
                    Presse
                  </Link>
                </div>
              </details>
              <details>
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                  Guides <ChevronDown size={16} />
                </summary>
                <div className="mt-2 grid gap-2 pl-3">
                  <Link href="#" className="text-sm opacity-90">
                    Commencer
                  </Link>
                  <Link href="#" className="text-sm opacity-90">
                    Fiscalité
                  </Link>
                  <Link href="#" className="text-sm opacity-90">
                    Sécurité
                  </Link>
                </div>
              </details>
              <hr className="my-1" />
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <Briefcase size={18} /> Portfolio
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <User size={18} /> Cristobal A.
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
