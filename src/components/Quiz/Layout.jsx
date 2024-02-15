import Card from "./Card";
import { data } from "./Data";
import { styles } from "./Styles";

const Layout = () => {
  return (
    <div style={styles.main}>
      <h1 style={styles.h1}>Mechanic</h1>
      <div style={styles.innerMain}>
        {data.map((data, i) => (
          <Card img={data.img} details={data.detail} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
