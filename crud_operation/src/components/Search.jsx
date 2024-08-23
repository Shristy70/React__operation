
import { useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Search = () => {
  const [rno, setRno] = useState("");
  const [mydata, setMydata] = useState([]);

  const handleSearch = () => {
    let url = `http://localhost:3000/data/?name=${rno}`;
    axios.get(url).then((res) => {
      setMydata(res.data);
    });
  };

  let ans = mydata.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.number}</td>
        <td>{item.Description}</td>
        <td>{item.From}</td>
        <td>{item.To}</td>
        <td>{item.Passanger}</td>
        <td>{item.Baggages}</td>
        <td>{item.Price}</td>
      </tr>
    );
  });

  return (
    <>
      <input
        type="text"
        value={rno}
        onChange={(e) => {
          setRno(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Number</th>
            <th>Description</th>
            <th>From</th>
            <th>To</th>
            <th>Passenger</th>
            <th>Baggages</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default Search;