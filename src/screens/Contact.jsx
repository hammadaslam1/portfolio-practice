/* eslint-disable react/jsx-no-target-blank */
import GITHUB from "../components/assets/icons/github.png";
import FACEBOOK from "../components/assets/icons/facebook.png";
import INSTAGRAM from "../components/assets/icons/instagram.png";
import TWITTER from "../components/assets/icons/twitter.png";
import DISCORD from "../components/assets/icons/discord.png";
import GMAIL from "../components/assets/icons/gmail.png";
import LINKEDIN from "../components/assets/icons/linkedin.png";

const Contact = () => {
  const selfContact = [
    {
      icon: GITHUB,
      link: "https://github.com/hammadaslam1",
      name: "Github",
    },
    {
      icon: LINKEDIN,
      link: "https://github.com/hammadaslam1",
      name: "LinkedIn",
    },
    {
      icon: FACEBOOK,
      link: "https://github.com/hammadaslam1",
      name: "Facebook",
    },
    {
      icon: INSTAGRAM,
      link: "https://github.com/hammadaslam1",
      name: "Instagram",
    },
    {
      icon: GMAIL,
      link: "https://github.com/hammadaslam1",
      name: "Gmail",
    },
    {
      icon: DISCORD,
      link: "https://github.com/hammadaslam1",
      name: "Discord",
    },
  ];
  return (
    <div className="contact">
      {selfContact.map((data, i) => (
        <div
          className="card"
          style={{
            backgroundImage: `url(${data.icon})`,
          }}
          onClick={() => alert()}
          key={i}
        >
          {/* <img src={data.icon} alt="" srcset="" /> */}
          <a href={data.link} className="anchor" target="_blank">
            {data.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contact;
