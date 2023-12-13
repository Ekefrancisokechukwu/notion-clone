"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/ui/Spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import { redirect } from "next/navigation";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-4xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Write, plan, share. <br /> With AI at your side.
      </h1>
      <h3 className="text-base m:text-xl md:text-2xl font-medium">
        Notion is the connected workspace where better, faster work happens.
      </h3>
      {isLoading && (
        <Button size={"icon"} variant={"ghost"}>
          <Spinner size={"lg"} />
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className=" font-semibold text-base">
            Get Notion free <ArrowRight className="ml-3 w-5" />
          </Button>
        </SignInButton>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild className=" font-semibold text-base">
          <Link href={"/documents"}>Enter Notion</Link>
        </Button>
      )}
    </div>
  );
};
export default Heading;
