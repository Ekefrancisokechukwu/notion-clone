import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center max-w-[1200px] mx-auto w-full p-6 bg-background z-50">
      <Logo />
      <div className="flex items-center gap-x-1">
        <Button variant={"ghost"} size={"icon"}>
          <Instagram className="w-5" />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Twitter className="w-5" />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Linkedin className="w-5" />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Facebook className="w-5" />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <Youtube className="w-5" />
        </Button>
      </div>
    </footer>
  );
};
export default Footer;
