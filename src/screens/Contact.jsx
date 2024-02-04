/* eslint-disable react/jsx-no-target-blank */
import SocialCard from "../components/cards/SocialCard";
import Instagram from "../components/assets/svg/Instagram";
import { selfContact } from "../components/data/ContactsData";

const Contact = () => {
  return (
    <div className="contact">
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
  );
};

export default Contact;
