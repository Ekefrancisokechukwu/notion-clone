"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/img/empty.png"}
        alt="empty"
        height={300}
        width={300}
        className=""
      />

      <h1 className="text-lg font-medium">
        👋 Welcome {user?.firstName} to{" "}
        <span className="font-semibold">Notion</span>
      </h1>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};
export default DocumentsPage;