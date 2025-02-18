import RingLoader from "react-spinners/RingLoader";

const LoadingSpinner = () => {
    return (
        <div className="h-[70vh] w-full flex justify-center items-center">
            <RingLoader color="#FF6900" />
        </div>
    );
};

export default LoadingSpinner;