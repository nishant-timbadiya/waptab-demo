import React from "react";
import "../../Elements/Options.css";
import { SiAmazonsimpleemailservice } from "react-icons/si";

const Options = ({ content , content_p , img }) => {
  return (
    <>
      <div className="option-wrapper m-6 border rounded-md hover:shadow-2xl px-5 py- h-full">
      <div className="">
        {/* <div className="option-logo"> */}
          <div className="ImgWrapper p-4">
            <img src={img} alt="..." />
          </div>
        {/* </div> */}
        <div className="option-content pt-5">
          <p>{content}</p>
        </div>
        <div>
          <p className="text-sm text-center opacity-80">{content_p}</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Options;
