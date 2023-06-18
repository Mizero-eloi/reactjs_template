import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

function Form(props) {
  const [productName, setProductName] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
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
  );
}

export default Form;
