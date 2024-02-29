/* eslint-disable jsx-a11y/anchor-is-valid */
// import Instagram from "../assets/svg/Instagram";
import "./socialcard.css";
const SocialCard = (props) => {
  const handleClick = (link) => {
    // console.log(props.imageSrc);
    window.open(link);
  };
  return (
    <div class="tooltip-container">
      <div class="tooltip">
        <div
          class="profile"
          style={{ backgroundColor: props.bg, borderColor: props.bg }}
        >
          <div class="user">
            <div
              class="profileImg"
              style={{ backgroundImage: `url(${props.imageSrc})` }}
            >
              {/* <img src={`${props.imageSrc}`} className="profileImg" alt="" /> */}
            </div>
            <div class="details">
              <button class="name" onClick={() => handleClick(props.link)}>
                {props.name}
              </button>
              <button
                class="name"
                onClick={() => handleClick(props.link)}
                style={{ color: "#fff", fontWeight: 500, fontSize: "14pt" }}
              >
                {props.handle}
              </button>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}></div>
            <div class="followers">{props.followers}</div>
          </div>
        </div>
      </div>
      <div class="text">
        <a class="icon" href={props.link} target="_blank" rel="noreferrer">
          <div class="layer" id="layer">
            <span style={{ backgroundColor: props.bg }}></span>
            <span style={{ backgroundColor: props.bg }}></span>
            <span style={{ backgroundColor: props.bg }}></span>
            <span style={{ backgroundColor: props.bg }}></span>
            <span style={{ backgroundColor: props.bg }}></span>
            <span style={{ backgroundColor: props.bg }}></span>
            <span style={{ backgroundColor: props.bg }}></span>
            <span style={{ backgroundColor: props.bg }}></span>
            <span class={props.class}>{props.media}</span>
          </div>
          <div
            class="nameText"
            style={{ color: props.bg, fontWeight: 700, fontSize: "22pt" }}
          >
            {props.mediaName}
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
