import s from "./Global.module.css";
import { Layout } from "../Layout/Layout";
import {Header} from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { PageHello } from "../Pages/PageHello/PageHello";
import About from "../Pages/About/About";

function App() {
  return (
    <Layout>
      <Header/>
      {/* <PageHello/> */}
      <About />
      <Footer />
    </Layout>
  );
}

export default App;
