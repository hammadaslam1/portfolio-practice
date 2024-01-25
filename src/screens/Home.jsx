/* eslint-disable no-unused-vars */
import { useState } from "react";
import PrimaryButton from "../components/Button";
import SubmitData from "./SubmitData";

const Home = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [object, setObject] = useState({});
  const handleData = () => {
    if (email.length > 0 && name.length > 0) {
      const newObject = {
        email: email,
        name: name,
      };
      setObject(newObject);
      setData((e) => [newObject, ...e]);
      setEmail("");
      setName("");
    }
  };
  return (
    <>
      <div style={{position: 'sticky', top: 0}}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            handleData();
          }}
        >
          submit
        </button> 
      </div>
      {/* <SubmitData /> */}
      {data.map((data, index) => (
        <div key={index}>
          <h3>{data.name}</h3>
          <h4>{data.email}</h4>
        </div>
      ))}
    </>
  );
};

export default Home;
