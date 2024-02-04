/* eslint-disable jsx-a11y/anchor-is-valid */
// import Instagram from "../assets/svg/Instagram";
import "./socialcard.css";
const SocialCard = (props) => {
  const handleClick = (link) => {
    // console.log(props.imageSrc);
    window.open(link);
  };
  const changeParentStyle = () => {
    document.getElementsByClassName("user").style.backgroundColor = "#f00";
  };
  //   console.log(props.imageSrc);
  return (
    <div class="tooltip-container">
      <div class="tooltip">
        <div class="profile">
          <div class="user">
            <div class="img">
              <img src={`${props.imageSrc}`} height={"50px"} alt="" />
            </div>
            <div class="details">
              <button class="name" onClick={() => handleClick(props.link)}>
                {props.name}
              </button>
              <button
                class="name"
                onClick={() => handleClick(props.link)}
                style={{ color: "#fff", fontWeight: 500 }}
              >
                {props.handle}
              </button>
            </div>
          </div>
          <div class="followers" onmouseover={() => changeParentStyle()}>
            {props.followers}
          </div>
        </div>
      </div>
      <div class="text">
        <a class="icon" href={props.link} target="_blank" rel="noreferrer">
          <div class="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class={props.class}>{props.media}</span>
          </div>
          <div class="nameText">{props.mediaName}</div>
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
