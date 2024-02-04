/* eslint-disable react/jsx-no-target-blank */
import SocialCard from "../components/cards/SocialCard";
import Instagram from "../components/assets/svg/Instagram";
import { selfContact } from "../components/data/ContactsData";
import '../styles/global.css'

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="pageTitle">My Contacts</h1>
      <div className="contactItems">
        {selfContact.map((data, i) => (
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
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
