import { cn } from "@/lib/utils";
import logo from "@/public/img/notion-logo.webp";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src={logo}
        alt="logo"
        className="object-cover h-auto sm:w-24 w-16"
      />
    </div>
  );
};
