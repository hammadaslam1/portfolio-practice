import "./App.css";
import Navigations from "./router/Navigations";
import { Toolbar } from "./components/Toolbar";
import Layout from "./components/Quiz/Layout";

function App() {
  return (
    <Navigations />
    //  <div>
    //   <Toolbar
    //   method1={ ()=> {alert("playing");} }
    //   method2={ () => { alert("liked");}}
    //  />
    //   <Toolbar method1={ () => {alert("playing vi 2");}}
    //     method2={ () => { alert("liked +2");}}
    //     />

    //   </div>
    // <Layout />
  );
}

export default App;
