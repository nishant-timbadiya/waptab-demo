import React from "react";
import "../../Elements/Options.css";

const Options = ({ content, content_p, img }) => {
  return (
    <>
      <div className="pb-10">
        {/* <div className="justify-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-10 md:px-10 h-full "> */}
          <div className=" m-6 border rounded-md hover:shadow-2xl px-5 h-full">
            <div className="">
              {/* <div className="option-logo"> */}
              <div className="ImgWrapper w-64 mx-auto p-4">
                <img src={img} alt="..." />
              </div>
              {/* </div> */}
              <div className="option-content pt-5">
                <p>{content}</p>
              </div>
              <div>
                <p className="text-sm text-center opacity-80">{content_p}</p>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
