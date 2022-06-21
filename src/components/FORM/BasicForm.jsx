import React, { useState } from "react";

export default function BasicForm()
{

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');


  const eventNAmeCng = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const eventEmailCng = (e) => {
    setEmail(e.target.value);
  };
  const eventPassCng = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = (e)=>{
    let user = {
      Name:name,
      Email:email,
      Pass:pass
    }
    console.warn(user);
    e.preventDefault()
  };

  return (
    <>
        <h1>Form Data</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              onChange={eventNAmeCng}
              placeholder="enter name" required value={name}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              onChange={eventEmailCng}
              placeholder="enter email" required value={email}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={eventPassCng}
              placeholder="enter password" required value={pass}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
    </>
  );
}
