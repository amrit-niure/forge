import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import BackgroundPaths from "@/components/background-paths";


export default function Home() {
  return (
    <BackgroundPaths title="Eloom">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center z-10 p-8 rounded-md bg-gray-50/90 dark:bg-neutral-950">
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="Eloom logo"
            width={100}
            height={38}
            priority
          />

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <span>For Job Seekers</span>
            <Link
              href="/jobseeker/signup"
              className={buttonVariants({ variant: "default" })}
            >
              Sign Up
            </Link>
            <Link
              href="/jobseeker/signin"
              className={buttonVariants({ variant: "outline" })}
            >
              Sign In
            </Link>
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <span>For Job Employers</span>
            <Link
              href="/employer/signup"
              className={buttonVariants({ variant: "outline" })}
            >
              Sign Up
            </Link>
            <Link
              href="/employer/signin"
              className={buttonVariants({ variant: "secondary" })}
            >
              Sign In
            </Link>
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              href="/dashboard/employer"
              className={ `${ buttonVariants({ variant: "secondary" })} hover:bg-black hover:text-white`}
            >
              Employers Dashboard
            </Link>
            <Link
              href="/dashboard/admin"
              className={buttonVariants({ variant: "secondary" })}
            >
              Admin Dashboard
            </Link>
          </div>
          <Link
              href="/dashboard/employer/settings"
              className={ `${ buttonVariants({ variant: "outline" })}`}
            >
              Employers Settings
            </Link>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center z-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Case Studies
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Community
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://jobs.eloom.com.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Visit Site →
          </a>
        </footer>
      </div>
    </BackgroundPaths>
  );
}