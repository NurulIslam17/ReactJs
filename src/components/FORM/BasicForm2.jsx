import React, { useState } from "react";

export default function BasicForm1() {
  const [user,setUser] = useState({name:'',email:''});
  const {name,email} = user;
  
  const OneHandle = (e) =>
  {
   setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    console.warn(user);
    e.preventDefault();
  };

  return (
    <>
      <h1>Form Data 2</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={OneHandle}
            placeholder="enter name"
            required
            value={name}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={OneHandle}
            placeholder="enter email"
            required
            value={email}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
