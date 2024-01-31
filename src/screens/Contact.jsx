/* eslint-disable react/jsx-no-target-blank */
import GITHUB from "../components/assets/icons/github.png";

const Contact = () => {
  const selfContact = [
    {
      icon: GITHUB,
      link: "https://github.com/hammadaslam1",
      name: 'Github'
    },
    {
      icon: GITHUB,
      link: "https://github.com/hammadaslam1",
      name: 'LinkedIn'
    },
    {
      icon: GITHUB,
      link: "https://github.com/hammadaslam1",
      name: 'Facebook'
    },
    {
      icon: GITHUB,
      link: "https://github.com/hammadaslam1",
      name: 'Instagram'
    },
    {
      icon: GITHUB,
      link: "https://github.com/hammadaslam1",
      name: 'Gmail'
    },
    {
      icon: GITHUB,
      link: "https://github.com/hammadaslam1",
      name: 'Discord'
    },
  ];
  return (
    <div className="contact">
      {selfContact.map((data, i) => (
        <div className="card" key={i}>
          <img src={data.icon} alt="" srcset="" />
          <a href={data.link} target="_blank">
            {data.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Contact;
