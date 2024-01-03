"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DownloadDropdown,
  ProductsDropdown,
  SolutionDropdown,
} from "./Dropdowns";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrollTop = useScrollTop(10);

  if (isAuthenticated) {
    return redirect("/documents");
  }

  return (
    <nav
      className={cn(
        "z-50 bg-background fixed top-0 flex  gap-x-8 items-center w-full p-6",
        scrollTop && "border-b shadow-sm"
      )}
    >
      <Logo />

      <ul className="xl:flex hidden items-center gap-x-1">
        <li className="relative group">
          <Button variant={"ghost"} className="flex text-base items-center">
            Product
            <ChevronDown className="ml-2 w-4 group-hover:rotate-180 transition-all" />
          </Button>
          <div className="absolute group-hover:visible scale-95 group-hover:scale-100 invisible transition-all duration-100 origin-top-left">
            <ProductsDropdown />
          </div>
        </li>
        <li className="relative group">
          <Button variant={"ghost"} className="flex text-base items-center">
            Download
            <ChevronDown className="ml-2 w-4 group-hover:rotate-180 transition-all" />
          </Button>
          <div className="absolute group-hover:visible scale-95 group-hover:scale-100 invisible transition-all duration-100 origin-top-left">
            <DownloadDropdown />
          </div>
        </li>
        <li className="relative group">
          <Button variant={"ghost"} className="flex text-base items-center">
            Solution
            <ChevronDown className="ml-2 w-4 group-hover:rotate-180 transition-all" />
          </Button>
          <div className="absolute group-hover:visible scale-95 group-hover:scale-100 invisible transition-all duration-100 origin-top-left">
            <SolutionDropdown />
          </div>
        </li>
        <li>
          <Button variant={"ghost"} className="flex text-base items-center">
            Pricing
          </Button>
        </li>
      </ul>

      <div className="flex gap-x-3 items-center ms-auto ">
        {isLoading && (
          <div className="flex gap-x-3  w-40">
            <Skeleton className="w-8 h-8 flex-1" />
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"} className="">
                Login
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button className="">Get Notion free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button asChild>
              <Link href={"/documents"}>Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
