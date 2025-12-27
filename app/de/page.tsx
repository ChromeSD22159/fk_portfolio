import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        Mobile Engineering
      </h1>

      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Ich entwickle moderne Mobile Apps für Android und iOS – mit Kotlin,
        Kotlin Multiplatform und einem klaren Fokus auf Qualität, Performance
        und saubere Architektur.
      </p>

      <p className="text-base text-zinc-600 dark:text-zinc-400">
        Android · iOS · Kotlin Multiplatform
      </p>

      <div className="flex gap-4">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="mailto:info@frederikkohler.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Sag Hallo!
          </a>

          <Link 
              href="/de/datenschutz"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          >
            Datenschutz
          </Link>

      </div>

      

      
    </div>
  );
} 