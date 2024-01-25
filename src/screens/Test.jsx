/* eslint-disable array-callback-return */
import { useState } from "react";

const Test = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(true);
  const [data, setData] = useState([]);
  const [object, setObject] = useState({ name: "" });
  const handleData = () => {
    const newObject = {
      name: "hammad",
    };
    setObject(newObject)
    setData((e) => [...e, newObject]);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleData();
        }}
        >
        submit
      </button>
        {data.map((data, i) => (
          <h5>{data.name}</h5>  
        ))}
    </div>
  );
};

export default Test;
