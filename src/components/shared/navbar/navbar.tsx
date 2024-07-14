import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/shared/navbar/mode-toggle";
import { MobileNavbar } from "@/components/shared/navbar/mobile-navbar";
import { GlobalSearch } from "@/components/shared/search/global-search";

export default function Navbar({}) {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-7 shadow-light-300 dark:shadow-none sm:px-12">
      <Link
        href={"/"}
        className="flex items-center gap-1"
      >
        <Image
          src={"/assets/images/site-logo.svg"}
          width={23}
          height={23}
          alt="DevFlow"
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <ModeToggle />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>

        <MobileNavbar />
      </div>
    </nav>
  );
}
