const About = () => {
  const aboutDetails = [
    "I'm Hammad Aslam, an Information Technology student from Jauharabad, Pakistan.",
    "I have done my Matriculation from Govt. Jauhar Memorial High School, Jauharabad in the session 2014-16 under BISE Sargodha securing 64% marks.",
    "I have done my Intermediate with Computer Science from Govt. Post Graduate College, Jauharabad in the session 2016-18 under BISE Sargodha securing 65% marks.",
    "I have done my undergraduation with Computer Science from Govt. Post Graduate College, Jauharabad under the affiliation of University of Sargodha in the session 2018-2020 securing 52% marks.",
    "I have done a Diploma of Information Technology from Information Technology Centre, Jauharabad under Punjab Board of Technical Education in the session 2020-2021 securing 78% marks.",
    "Now I'm a student of BS Information Technology Post ADP 4th sem (8th sem BS(hons)) University of Education, Lahore for the session 2022-2024. My CGPA is 3.61.",
    "Currently I am working on my final year project, 'Customer Reviews Classification and Analysis System using Data Mining and NLP'. It is basically a system that analyzes the customer reviews and classify them on the basis of fakeness, sentiments, topics and context extraction. These reviews are taken from various E-commerce platforms like Amazon and Daraz.",
    "I have interests in programming and web development. I have developed some projects for Web and android in React JS and React Native respectively.",
    "I'm looking for the opportunities to enhance my skills.",
    "I enjoy working on side projects to upskill myself and learn new stuff.",
  ];
  return (
    <div className="about">
      <h1>About me</h1>
      <div className="aboutPara">
        <p>
          I'm <span className="highlight">Hammad Aslam</span>, an Information
          Technology student from Jauharabad, Pakistan.
        </p>
        <p>
          I have done my Matriculation from Govt. Jauhar Memorial High School,
          Jauharabad in the session 2014-16 under BISE Sargodha securing{" "}
          <span className="highlight">64%</span> marks.
        </p>
        <p>
          I have done my Intermediate with Computer Science from Govt. Post
          Graduate College, Jauharabad in the session 2016-18 under BISE
          Sargodha securing <span className="highlight">65%</span>{" "} marks.
        </p>
        <p>
          I have done my undergraduation with Computer Science from Govt. Post
          Graduate College, Jauharabad under the affiliation of University of
          Sargodha in the session 2018-2020 securing{" "}
          <span className="highlight">52%</span> marks.
        </p>
        <p>
          I have done a Diploma of Information Technology from Information
          Technology Centre, Jauharabad under Punjab Board of Technical
          Education in the session 2020-2021 securing{" "}
          <span className="highlight">78%</span> marks.
        </p>
        <p>
          Now I'm a student of BS Information Technology Post ADP 4th sem (8th
          sem BS(hons)) University of Education, Lahore for the session
          2022-2024. My CGPA is <span className="highlight">3.61</span>.
        </p>
        <p>
          Currently I am working on my final year project,{" "}
          <span className="highlight">
            'Customer Reviews Classification and Analysis System using Data
            Mining and NLP'
          </span>
          . It is basically a system that analyzes the customer reviews and
          classify them on the basis of fakeness, sentiments, topics and context
          extraction. These reviews are taken from various E-commerce platforms
          like Amazon and Daraz.
        </p>
        <p>
          I have interests in programming and web development. I have developed
          some projects for Web and android in{" "}
          <span className="highlight">React JS</span> and{" "}
          <span className="highlight">React Native</span>{" "}
          respectively.
        </p>
        <p>I'm looking for the opportunities to enhance my skills.</p>
        <p>
          I enjoy working on side projects to upskill myself and learn new
          stuff.
        </p>
      </div>
    </div>
  );
};

export default About;
