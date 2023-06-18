import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

function EditForm({ toggleModal, handleEdit, dataToUpdate }) {
  const [chasisNumber, setChasisNumber] = useState(dataToUpdate.chasisNumber);
  const [manufactureCompany, setManufactureCompany] = useState(
    dataToUpdate.manufactureCompany
  );
  const [manufactureYear, setManufactureYear] = useState(
    dataToUpdate.manufactureYear
  );
  const [price, setPrice] = useState(dataToUpdate.price);
  const [modelName, setModelName] = useState(dataToUpdate.modelName);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit({
      chasisNumber,
      manufactureCompany,
      manufactureYear,
      price,
      modelName,
    });
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
                Edit data
              </h3>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="productName" value="Product Name" />
                </div>
                <TextInput
                  value={chasisNumber}
                  onChange={(e) => setChasisNumber(e.target.value)}
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
                  value={manufactureCompany}
                  onChange={(e) => setManufactureCompany(e.target.value)}
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
                  value={manufactureYear}
                  onChange={(e) => setManufactureYear(e.target.value)}
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

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="modelName" value="Model Name" />
                </div>
                <TextInput
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  id="price"
                  placeholder="enter something"
                  required
                />
              </div>

              <div className="w-full">
                <Button type="submit">Edit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditForm;
