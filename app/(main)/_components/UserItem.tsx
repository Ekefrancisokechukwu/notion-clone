"use client";
import { ChevronsLeftRight } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";

const UserItem = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 gap-x-2  w-full hover:bg-primary/5"
        >
          <Avatar className="w-5 h-5">
            <AvatarImage src={user?.imageUrl} />
          </Avatar>
          <div className=" flex items-center  justify-items-start ">
            <span className="text-start line-clamp-1 mr-1 font-medium ">
              {user?.fullName}&apos;s Notion
            </span>

            <ChevronsLeftRight className="rotate-90 mr-6    text-muted-foreground h-4 w-4" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        alignOffset={11}
        forceMount
        align="start"
        className="w-80"
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-[.69rem] font-medium leading-none text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>

          <DropdownMenuItem className="cursor-pointer">
            <div className="flex items-center gap-x-2">
              <div className="p-1 rounded-md bg-secondary">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.imageUrl} />
                </Avatar>
              </div>
              <div className="space-y-1">
                <p className="text-sm line-clamp-1">
                  {user?.fullName}&apos;s Notion
                </p>
              </div>
            </div>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground"
        >
          <SignOutButton>Log out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserItem;
