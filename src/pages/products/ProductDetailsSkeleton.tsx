import { Skeleton } from "antd";

const ProductDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center !my-10 !gap-8">
      {/* Image skeleton */}
      <div className="flex justify-center items-center">
        <Skeleton.Image className="!w-full" style={{ height: 320 }} active />
      </div>

      {/* Text content skeleton */}
      <div className="!space-y-3 !px-5 w-full">
        {/* <Skeleton.Input style={{ width: 200 }} active /> */}
        <Skeleton className="w-full" paragraph={{ rows: 2 }} active />

        {/* Star rating placeholder */}
        <div className="flex !space-x-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="w-6 h-6 bg-gray-200 rounded text-transparent"
            >
              ★
            </div>
          ))}
        </div>

        {/* Info skeletons */}
        <div className="!space-y-2">
          <Skeleton.Input style={{ width: 150 }} active />
          <Skeleton.Input style={{ width: 120 }} active />
          <Skeleton.Input style={{ width: 100 }} active />
          <Skeleton.Input style={{ width: 160 }} active />
          <Skeleton.Input style={{ width: 130 }} active />
        </div>

        {/* Button skeletons */}
        <div className="flex !gap-3 !pt-2">
          <Skeleton.Button active style={{ width: 100 }} />
          <Skeleton.Button active style={{ width: 100 }} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
