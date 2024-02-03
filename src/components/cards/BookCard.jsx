/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./bookcard.css";
import Github from "../assets/svg/Github";
import Play from "../assets/svg/Play";

const BookCard = (props) => {
  const imageArray = props.image;
  const [url, setUrl] = useState(`url(${imageArray})`);
  const handleClick = (link) => {
    window.open(link);
  };
  const arr = [<Github />, <Play />];
  return (
    <div class="book">
      <div className="shadow">
        <h2 className="bookTitle">{props.title}</h2>
        <p className="desc">{props.description}</p>
        <div className="links">
          {props.buttons.map((data, i) => (
            <button onClick={() => handleClick(props.link[i])}>
              {arr[i]}
              {data}
            </button>
          ))}
        </div>
        <div className="languages">
          {props.languages.map((data) => (
            <span>{data}</span>
          ))}
        </div>
      </div>
      <div className="cover" style={{ backgroundImage: url }}>
        <h2 className="cardTitle">{props.title}</h2>
      </div>
    </div>
  );
};

export default BookCard;
