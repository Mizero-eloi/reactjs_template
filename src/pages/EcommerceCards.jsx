import React from "react";
import SideBarComponent from "../components/Sidebar";
import { Card } from "flowbite-react";

const EcommerceCards = () => {
  return (
    <div className="flex">
      {/* Sidebar component */}
      <SideBarComponent />

      <div className="w-3/4 ml-3">
        <Card
          className="w-[30%]"
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc="https://sneakernews.com/wp-content/uploads/2023/04/air-jordan-1-mid-university-blue-black-dq8426-401-1.jpg"
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <p>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</p>
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              <p>5.0</p>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              href="#"
            >
              <p>Add to cart</p>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EcommerceCards;
