import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
const Display = () => {
  const [mydata, setMydata] = useState([]);
  const loadData = () => {
    let url = "http://localhost:3000/data";
    axios.get(url).then((res) => {
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  const myDel = (myid) => {
    let url = `http://localhost:3000/data/${myid}`;
    axios.delete(url).then((res) => {
      alert("delete data");
      loadData();
    });
  };
  let ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.id}</td>
          <td>{key.name}</td>
          <td>{key.number}</td>
          <td>{key.Description}</td>
          <td>{key.From}</td>
          <td>{key.To}</td>
          <td>{key.Passanger}</td>
          <td>{key.Baggages}</td>
          <td>{key.Price}</td>
          <td>
            <button
              onClick={() => {
                myDel(key.id);
              }}
              style={{ color:"red" , border:"none",backgroundColor:"none", fontSize:"20px" }}
            >
              <MdDelete />
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <Table striped bordered hover>
        <thead style={{ color: "navy" }}>
          <tr>
            <th>S.no</th>
            <th>Name :</th>
            <th>Number :</th>
            <th>Description :</th>
            <th>From :</th>
            <th>To :</th>
            <th> Passanger:</th>
            <th> Baggages :</th>
            <th>price :</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default Display;
