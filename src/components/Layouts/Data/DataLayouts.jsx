import { useState } from "react";
import { data } from "../../../utils/data";
import Navbar from "../../Fragments/Global/Navbar";
import Button from "../../Elements/Button/Index";

const DataLayouts = () => {
  const [filteredDenoms, setFilteredDenoms] = useState([]);

  const handleFilter = () => {
    const filteredArray = data[0].data.response.billdetails
      .filter((bill) => parseFloat(bill.body[0].split(": ")[1]) >= 100000)
      .map((bill) => parseFloat(bill.body[0].split(": ")[1]));

    setFilteredDenoms(filteredArray);
  };

  return (
    <>
      <Navbar />
      <div className="px-8 my-8">
        <h1 className="mb-4 text-2xl font-bold">Data Display</h1>

        <Button classname="my-4 btn-sm " onClick={handleFilter}>
          Filter Denom
        </Button>

        <div className="p-4 mb-4 border">
          {data[0].data.response.billdetails.map((bill, i) => (
            <div key={i} className="p-2 mb-2 border">
              <p>Title: {bill.title}</p>
              <p>Total Amount: {bill.totalamount}</p>
              <p>Body: {bill.body.join(", ")}</p>
            </div>
          ))}
        </div>

        {filteredDenoms.length > 0 && (
          <div className="p-4 mb-4 border">
            <h2 className="mb-2 text-xl font-bold">Filtered Denominations</h2>
            <ul>
              {filteredDenoms.map((denom, index) => (
                <li key={index}>{denom}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DataLayouts;
