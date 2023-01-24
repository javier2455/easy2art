import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loading = ({ loading }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <ClimbingBoxLoader
        color="rgba(79, 70, 229)"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
