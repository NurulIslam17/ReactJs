import React, { useState } from "react";

export default function BasicForm1() {
  const [user,setUser] = useState({name:'',email:'',pass:''});
  const {name,email,pass} = user;

  const eventNAmeCng = (e) => {
    // console.log(e.target.value);
    setUser({name:e.target.value,email,pass});
  };
  const eventEmailCng = (e) => {
    setUser({name,email:e.target.value,pass});
  };
  const eventPassCng = (e) => {
    setUser({name,email,pass:e.target.value});
  };
  const handleSubmit = (e) => {
    console.warn(user);
    e.preventDefault();
  };

  return (
    <>
      <h1>Form Data</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={eventNAmeCng}
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
            onChange={eventEmailCng}
            placeholder="enter email"
            required
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            onChange={eventPassCng}
            placeholder="enter password"
            required
            value={pass}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
