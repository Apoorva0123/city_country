import React, { useState } from 'react'
//import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Countries() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  //const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title: text
    };
    fetch("http://localhost:8080/countries", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => {
        setText("");
      })
      .then(() => {
        navigate("/");
      })
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Country'/>
      <button onClick={handleAdd}>Submit</button>
    </div>
  )
}
