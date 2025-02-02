import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SparklesCore } from "@/components/sparkles";
import Words from "@/components/words";
import { UserPlus, LogIn, Briefcase, Settings, Users, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="z-10 min-h-screen flex flex-col items-center justify-center dark:bg-neutral-950 px-8">
        {/* Hero Section */}
        <Words />

        {/* Main Content */}
        <div className="z-10 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 rounded-md bg-gray-50 dark:bg-neutral-950 mt-8">
          {/* Job Seekers Card */}
          <div className="p-6  dark:bg-neutral-900 rounded-md border flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
              For Job Seekers
            </h2>
            <div className="flex gap-4">
              <Link
                href="/jobseeker/signup"
                className={buttonVariants({ variant: "default" })}
              >
                <UserPlus className="mr-2 h-4 w-4" /> Sign Up
              </Link>
              <Link
                href="/jobseeker/signin"
                className={buttonVariants({ variant: "outline" })}
              >
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Link>
            </div>
          </div>

          {/* Job Employers Card */}
          <div className="p-6 dark:bg-neutral-900 rounded-md border flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
              For Job Employers
            </h2>
            <div className="flex gap-4">
              <Link
                href="/employer/signup"
                className={buttonVariants({ variant: "outline" })}
              >
                <UserPlus className="mr-2 h-4 w-4" /> Sign Up
              </Link>
              <Link
                href="/employer/signin"
                className={buttonVariants({ variant: "secondary" })}
              >
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Link>
            </div>
          </div>

          {/* Dashboards Card */}
          <div className="p-6  dark:bg-neutral-900 rounded-md border sm:col-span-2 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
              Dashboards
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href="/dashboard/employer"
                className={`${buttonVariants({
                  variant: "outline",
                })}`}
              >
                <Briefcase className="mr-2 h-4 w-4" /> Employers Dashboard
              </Link>
              <Link
                href="/dashboard/admin"
                className={buttonVariants({ variant: "secondary" })}
              >
                <Settings className="mr-2 h-4 w-4" /> Admin Dashboard
              </Link>
            </div>
          </div>

          {/* Settings Link */}
          <div className="sm:col-span-2 flex justify-center">
            <Link
              href="/dashboard/employer/settings"
              className={`${buttonVariants({ variant: "outline" })} w-full sm:w-auto text-center`}
            >
              <Settings className="mr-2 h-4 w-4" /> Employers Settings
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 w-full max-w-2xl flex gap-6 flex-wrap items-center justify-center z-10 bg-gray-50 dark:bg-neutral-900 px-4 py-3 rounded-md">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-neutral-700 dark:text-neutral-300"
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
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-neutral-700 dark:text-neutral-300"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Users className="h-4 w-4" />
            Community
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-neutral-700 dark:text-neutral-300"
            href="https://jobs.eloom.com.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-4 w-4" />
            Visit Site →
          </a>
        </footer>
      </div>
    </main>
  );
}