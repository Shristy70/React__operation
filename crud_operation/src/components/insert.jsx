import React from "react";
import { useState } from "react";
import axios from "axios";
const Insert = () => {
  const [input , setInput] = useState({});
  const handelChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values , [name]:value}));
  }
  const handelClick = ()=>{
    
    let url = "http://localhost:3000/data";
    axios.post(url,input).then((res)=>{
      alert("data save");
      setInput({});
    }).catch((err)=>{

      console.log(err);
    })
    
  }
  return (
    <div>
      <form action="" className="insertform">
        <div className="row1">
          <div className="col1">
        <label htmlFor="" > Name :</label><br />
        <input type="text" placeholder="enter your name" name="name" value={input.name} onChange={handelChange}/></div>
        <div className="col2">
        <label htmlFor=""> Number :</label><br />
        <input type="text" placeholder="text"  name="number" value={input.number}  onChange={handelChange}/><br /></div></div>
        <div className="row2">
          <div className="col1">
        <label htmlFor="">Description :</label><br />
        <input type="text" placeholder="description"  name="Description" value={input.Description} onChange={handelChange} /></div>
        <div className="col2">
        <label htmlFor=""> From :</label><br />
        <input type="text" placeholder="from" name="From" value={input.From}  onChange={handelChange}/><br /></div>
        </div>
        <div className="row3">
          <div className="col1">
        <label htmlFor=""> TO :</label><br />
        <input type="text" placeholder="to"  name="To" value={input.To}  onChange={handelChange}/></div>
        <div className="col2">
        <label htmlFor="">Passanger :</label><br />
        <input type="text"  name="passanger" value={input.passanger} onChange={handelChange}  /><br /></div></div>
        <div className="row4">
          <div className="col1">
        <label htmlFor=""> Baggages :</label><br />
      
        <input type="text" placeholder="Baggages"  name="Baggages" value={input.Baggages}  onChange={handelChange}/></div>
        <div className="col2">
        <label htmlFor="">Price :</label><br />
        <input type="text"  name="Price" value={input.Price} onChange={handelChange}/><br /></div></div>
        <button onClick={handelClick} className="buttonform">Submit</button>
      </form>
    </div>
  );
};

export default Insert;
