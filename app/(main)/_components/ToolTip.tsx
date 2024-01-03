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
};

const ToolTip = ({ trigger, contents }: ToolTipProps) => {
  return (
    <TooltipProvider delayDuration={2}>
      <Tooltip>
        <TooltipContent>{contents}</TooltipContent>
        <TooltipTrigger>{trigger}</TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};
export default ToolTip;
