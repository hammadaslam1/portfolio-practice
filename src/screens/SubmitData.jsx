/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const SubmitData = ({ ...props }) => {
  const [data, setData] = useState(props.data);
  console.log(props.data);
  // useEffect(() => {
  //   setData(props.data);
  //   console.log(data);
  // }, []);

  return (
    <div>
      {data.map((data, index) => (
        <div key={index}>
          <h3>{data.name}</h3>
          <h4>{data.email}</h4>
        </div>
      ))}
    </div>
  );
};

export default SubmitData;
