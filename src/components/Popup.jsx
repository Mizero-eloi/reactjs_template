import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function Popup({ handleAdd }) {
  const [openModal, setOpenModal] = useState("");
  const [productName, setProductName] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ productName, color, category, price });
  };

  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("form-elements")}>Add</Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add to the table
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Add to the table
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="input1" value="Input1 " />
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
                    <Label htmlFor="input2" value="Input2" />
                  </div>
                  <TextInput id="input2" type="text" required />
                </div>
                <div className="w-full">
                  <Button type="submit">Add</Button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
