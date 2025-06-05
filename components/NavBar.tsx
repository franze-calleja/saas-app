import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <div className=" flesx items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={44} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <div className="flex items-center gap-2">
            <SignInButton>
              <button className="btn-signin">Sign in</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
