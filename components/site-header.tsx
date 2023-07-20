'use client';
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";


export function SiteHeader() {
  const { token, logout } = useAuthContext();



  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background" id="noprint">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">

            <ThemeToggle />

            {token != "" ? <Link

              className={buttonVariants({ variant: "outline" })}
              onClick={() => {
                logout();

              }}
              href="/login"
            >
              Logout
            </Link>
              : null}


          </nav>
        </div>
      </div>
    </header>
  );
}
