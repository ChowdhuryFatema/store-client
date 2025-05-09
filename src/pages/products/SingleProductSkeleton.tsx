const SingleProductSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl shadow border border-gray-300 relative animate-pulse">
            <div className="rounded-2xl flex justify-center items-center bg-gray-100">
                <div className="w-[300px] h-[220px] bg-gray-200 rounded-2xl"></div>
            </div>
            <div className="!px-5 !py-3 border-t border-orange-100 !space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                    <div className="h-6 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-5 h-5 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                    <div className="h-5 bg-gray-200 rounded w-20"></div>
                </div>

                <div className="h-[56px]">
                    <div className="absolute bottom-5 left-5">
                        <div className="w-[120px] h-10 bg-gray-300 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductSkeleton;
