import { useState } from "react";
import "./bookcard.css";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const imageArray = props.image;
  const [url, setUrl] = useState(`url(${imageArray[0]})`);
  return (
    <div class="book">
      <div className="shadow">
        <p>{props.title}</p>
        <p>{props.description}</p>
        <div>
          {props.buttons.map((data, i) => (
            <button href={data}>{data}</button>
          ))}
        </div>
      </div>
      <div className="cover" style={{ backgroundImage: url }}>
        <h3 className="cardTitle">{props.title}</h3>
      </div>
    </div>
  );
};

export default BookCard;
