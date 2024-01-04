import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import { ReactElement, ReactNode } from "react";

type ToolTipProps = {
  trigger: ReactNode;
  contents: ReactNode;
  placement?: "right" | "left" | "top" | "bottom";
};

const ToolTip = ({ trigger, contents, placement }: ToolTipProps) => {
  return (
    <TooltipProvider delayDuration={2}>
      <Tooltip>
        <TooltipContent side={placement}>{contents}</TooltipContent>
        <TooltipTrigger className="w-full">{trigger}</TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};
export default ToolTip;
