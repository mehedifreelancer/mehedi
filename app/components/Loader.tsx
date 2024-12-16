import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="bix-loader">
      <span className="loader"></span>
      {/* <Image height={400} width={400} src="/assets/img/logo/logo.png" alt="" /> */}
    </div>
  );
};

export default Loader;
