import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import EmployerRegisterForm from "@/app/(auth)/components/employer-register-form"


export default function AuthenticationPage() {
  return (
    <div className="h-screen">
      <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          href="/employer/register"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </a>
        <div className="relative hidden h-full flex-col bg-muted p-10  dark:border-r lg:flex">
          <div className="absolute inset-0 bg-gray-200" />
          <div className="relative z-20 flex items-center text-lg font-medium">
           Eloom
          </div>
          <div className="relative z-20 mt-auto">
          </div>
        </div>
        <div className="lg:p-8">
          <div className="flex mx-auto flex-col justify-center space-y-6 sm:w-[350px] border-2] ">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            <EmployerRegisterForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}