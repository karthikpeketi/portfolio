import React from "react";
import { Triangle } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center py-72 max-[426px]:py-50">
      <Triangle
        visible={true}
        height="150"
        width="150"
        color="#38bdf8 "
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
