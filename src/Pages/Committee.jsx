import React, { useState, useEffect } from "react";
import "../Elements/Committee.css";
import Data from "../Components/Committee/Committee_Data";

const Committee = () => {
  const [items, setItems] = useState(Data);

  
  const filterItem = (categItem) => {
    const updatedItems = Data.filter((curElem) => {
      return curElem.Category === categItem;
    });
    
    setItems(updatedItems);
    
  };
  
  const [selected, setSelected] = useState(1);
  
  const handleSelect = (e) => {
    console.log(e.target.id);
    setSelected(Number(e.target.id));
  };

  useEffect(() => {
    filterItem("Steering");
    setSelected(1);
  }, []);

  return (
    <>

      <div>
        <div className="text-center pt-5">
          <div className="text-4xl uppercase title-underline-2 font-bold text-[rgb(3,74,102)]">Committee</div>
        </div>

        <div className="text-center">
          <div className="toggle-committee lg:gap-10 md:gap-7 gap-3">
            <button className="uppercase font-semibold text-sm" onClick={() => filterItem("Steering")}><div className={selected == 1 ? "active optn" : "optn"} id='1' onClick={(e)=>handleSelect(e)}>Steering Committee</div></button>
            <button className="uppercase font-semibold text-sm" onClick={() => filterItem("Governing")}><div className={selected == 2 ? "active optn" : "optn"} id='2' onClick={(e)=>handleSelect(e)}>Governing Body</div></button>
            <button className="uppercase font-semibold text-sm" onClick={() => filterItem("Expo")}><div className={selected == 3 ? "active optn" : "optn"} id='3' onClick={(e)=>handleSelect(e)}>Expo Committee</div></button>
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 pb-10 lg:px-20">
            {items.map((elem) => {
              const { id, Name, img, Company, Post } = elem;

              return (
                <div className="mx-auto text-center border rounded-md hover:shadow-2xl cursor-pointer bg-zinc-50 mb-10">
                  <div className="p-5">
                    <img className="rounded-md ImgWrapper" src={img} alt="Committee" />
                  </div>
                  <div className="">
                    <div className="text-xl font-semibold opacity-85 font-[Montserrat]">{Name}</div>
                    <div className="pt-1 opacity-85 font-[Montserrat]">{Company}</div>
                    <div className="pb-5 opacity-85 font-[Montserrat]">{Post}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Committee;
