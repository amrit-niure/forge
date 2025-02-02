import Link from "next/link";

export default function NavLink({ href, children, className }: { href: string; children: React.ReactNode, className: string }) {
    return (
      <Link href={href} className={` transition-colors relative group ${className} w-fit`}>
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
      </Link>
    )
  }