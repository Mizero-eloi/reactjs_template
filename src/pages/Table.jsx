import React, { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import SideBarComponent from "../components/Sidebar";
import AddForm from "../components/AddForm";
import EditForm from "../components/EditForm";
import { getAllVehicles } from "../services/vehicleService";

const TableComponent = () => {
  const [isViewEditModal, setIsViewEditModal] = useState(false);
  const [isViewAddModal, setIsViewAddModal] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState("");

  const [vehicles, setVehicles] = useState([]);

  // fake data

  const [data, setData] = useState([
    {
      productName: "Apple MacBook Pro 1",
      color: "silver",
      category: "laptop",
      price: "$2000",
    },
    {
      productName: "Microsoft Surface Pro",
      color: "white",
      category: "Laptop PC",
      price: "$1000",
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      productName: "HP",
      color: "silver",
      category: "laptop",
      price: "$2000",
    },
  ]);

  // Function to toggle modal

  function handleToggleModal() {
    setIsViewEditModal(!isViewEditModal);
  }

  // function to close add modal

  function closeAddModal() {
    setIsViewAddModal(false);
  }

  // Function to add data to the table

  const handleAdd = (newData) => {
    const updateData = [...data, newData];
    setData(updateData);
    closeAddModal(false);
  };

  // Function to handle edit button

  const handleEdit = (key) => {
    setIsViewEditModal(true);

    // Searching the object and return the object
    for (let i = 0; i < vehicles.length; i++) {
      const obj = vehicles[i];
      if (obj.hasOwnProperty("chasisNumber") && obj["chasisNumber"] === key) {
        setDataToUpdate(obj);
        console.log("The object to be updated", obj);
      }
    }
  };

  // Function to edit data

  const editData = (updatedData) => {
    const updatedArray = vehicles.map((item) =>
      item.chasisNumber === dataToUpdate.chasisNumber
        ? { ...item, ...updatedData }
        : item
    );
    setVehicles(updatedArray);
    setIsViewEditModal(false);

    // Call the api here
  };

  // Function to delete data from the table

  const handleDelete = (key) => {
    const updatedData = vehicles.filter((item) => item.chasisNumber !== key);
    setVehicles(updatedData);
  };

  // Function to fetch data from the server

  const fetchVehicles = async () => {
    const { data } = await getAllVehicles();
    setVehicles(data.data);
    console.log("All vehicles", data.data);
  };

  // loading all the data(vehicles) from the server and update the state

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div className="flex">
      {/* sidebar */}
      <SideBarComponent />

      {/* Edit modal */}

      {isViewEditModal && (
        <EditForm
          dataToUpdate={dataToUpdate}
          handleEdit={editData}
          toggleModal={handleToggleModal}
        />
      )}

      {/* Add Modal */}

      {isViewAddModal && (
        <AddForm toggleModal={closeAddModal} handleAdd={handleAdd} />
      )}

      {/* Table */}

      <div className=" mt-5 ml-3 w-3/4 pt-3">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold mt-4 mb-4">Table content</h2>
          <Button size="sm" onClick={() => setIsViewAddModal(true)}>
            +
          </Button>
        </div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell
              style={{ backgroundColor: "#056CF2", color: "white" }}
            >
              chasisNumber
            </Table.HeadCell>
            <Table.HeadCell
              style={{ backgroundColor: "#056CF2", color: "white" }}
            >
              Company
            </Table.HeadCell>
            <Table.HeadCell
              style={{ backgroundColor: "#056CF2", color: "white" }}
            >
              Category
            </Table.HeadCell>
            <Table.HeadCell
              style={{ backgroundColor: "#056CF2", color: "white" }}
            >
              Price
            </Table.HeadCell>
            <Table.HeadCell
              style={{ backgroundColor: "#056CF2", color: "white" }}
            >
              Modelname
            </Table.HeadCell>
            <Table.HeadCell
              style={{ backgroundColor: "#056CF2", color: "white" }}
            >
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {/* displaying the data in table */}

            {vehicles?.map((v) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {v.chasisNumber}
                </Table.Cell>
                <Table.Cell>{v.manufactureCompany}</Table.Cell>
                <Table.Cell>{v.manufactureYear}</Table.Cell>
                <Table.Cell>{v.price}</Table.Cell>
                <Table.Cell>{v.modelName}</Table.Cell>
                <Table.Cell className="flex gap-2">
                  <p
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
                    onClick={() => handleEdit(v.chasisNumber)}
                  >
                    Edit
                  </p>
                  <p
                    className="font-medium text-red-600 hover:underline dark:text-red-500 cursor-pointer"
                    onClick={() => handleDelete(v.chasisNumber)}
                  >
                    Delete
                  </p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default TableComponent;
