import React from "react";

function PopUpModal({ toggleModal, Component, title }) {
  return (
    <>
      <div className="w-full h-full bg-[rgba(0,0,0,0.5)] absolute left-0 z-[1]">
        <h2
          className="text-white relative float-right mr-5 mt-4 cursor-pointer"
          onClick={toggleModal}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 18L6 6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 6L5.99997 18"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
        <div className="w-[40%] h-30 bg-white m-auto p-[31px] mt-[68px] rounded-sm">
          <Component />
        </div>
      </div>
    </>
  );
}

export default PopUpModal;
