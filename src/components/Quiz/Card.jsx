/* eslint-disable jsx-a11y/img-redundant-alt */
import { styles } from "./Styles";

const Card = (props) => {
  console.log(props.details);
  const details = props.details;
  const arr = ["Name:", "Color:", "Size:"];
  return (
    <div key={props.index} style={styles.card}>
      <div style={styles.imgDiv}>
        <img src={props.img} style={styles.image} alt="some image" />
      </div>
      {details.map((data, i) => (
        <div key={i} style={styles.details}>
          <span style={styles.span}>{arr[i]}</span>
          <p style={styles.para}>{data}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
