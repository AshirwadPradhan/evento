import SkeletonCard from "@/components/skeleton-card";

function loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto my-20 px-[20px]py-24 gap-20">
      {Array.from({ length: 12 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default loading;
