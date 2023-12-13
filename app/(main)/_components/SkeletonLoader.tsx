import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="h-full flex  ">
      <div className="h-full bg-secondary  p-3  w-64">
        <div className="flex gap-x-3 w-full ">
          <Skeleton className="w-4 h-4 flex-shrink-0" />
          <Skeleton className="h-3 flex-1" />
        </div>
        <div className="mt-6 space-y-4">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="mt-8 space-y-4 pl-3">
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-4 flex-1" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-4 flex-1" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-4 flex-1" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-4 flex-1" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-4 flex-1" />
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="flex gap-2 items-center w-40">
          <Skeleton className="h-6 w-6 flex-shrink-0" />
          <Skeleton className="h-4 w-2/3 flex-1" />
        </div>
      </div>
    </div>
  );
};
export default SkeletonLoader;
