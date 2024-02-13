/* eslint-disable react/jsx-no-target-blank */
import SocialCard from "../components/cards/SocialCard";
import Instagram from "../components/assets/svg/Instagram";
import { selfContact } from "../components/data/ContactsData";
import "../styles/global.css";
import { ContactCSS } from "../styles/ContactCSS";
import { useEffect, useRef } from "react";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={ContactCSS.contact}>
      <h1 className="pageTitle">My Contacts</h1>
      <div className="contactItems">
        {selfContact.map((data, i) => (
          <div style={ContactCSS.item}>
            <SocialCard
              element={<Instagram />}
              link={data.link}
              name={data.name}
              media={data.media}
              class={data.class}
              mediaName={data.mediaName}
              handle={data.handle}
              followers={data.followers}
              imageSrc={data.imageSrc}
              bg={data.bg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
