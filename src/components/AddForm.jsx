import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

function AddForm({ toggleModal, handleAdd }) {
  const [productName, setProductName] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ productName, color, category, price });
  };

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
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add to the table
              </h3>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="productName" value="Product Name" />
                </div>
                <TextInput
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  id="input1"
                  placeholder="enter something"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="color" value="color" />
                </div>
                <TextInput
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  id="color"
                  placeholder="enter something"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="category" value="category" />
                </div>
                <TextInput
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  id="color"
                  placeholder="enter something"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="price" />
                </div>
                <TextInput
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="price"
                  placeholder="enter something"
                  required
                />
              </div>

              <div className="w-full">
                <Button type="submit">Add</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddForm;
