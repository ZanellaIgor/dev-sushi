import { Skeleton } from '@/components/ui/skeleton';

export const TabsSkeleton = () => {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex h-10 w-full shrink-0 items-center justify-center rounded-md bg-muted p-1">
        {Array.from({ length: 4 }, (_, index) => (
          <Skeleton
            key={index}
            className="mx-1 h-7 flex-1 rounded-sm bg-background"
          />
        ))}
      </div>

      <div className="scrollbar-pretty mt-6 min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-gutter:stable]">
        <div className="grid grid-cols-2 gap-5 pb-2 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index}>
              <Skeleton className="h-32 w-full rounded-md" />
              <div className="mt-3 flex flex-col gap-2">
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
