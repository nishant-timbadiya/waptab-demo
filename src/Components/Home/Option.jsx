import React from "react";
import "../../Elements/Options.css";

const Options = ({ content, content_p, img }) => {
  return (
    <>
      <div>
        {/* <div className="justify-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-10 md:px-10 h-full "> */}
          <div className=" m-6 border rounded-md hover:shadow-2xl pb-12 px-5">
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
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
