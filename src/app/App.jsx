import s from "./Global.module.css";
import { Layout } from "../Layout/Layout";
import {Header} from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { PageHello } from "../Pages/PageHello/PageHello";
import About from "../Pages/About/About";
import { Contacts } from "../Pages/Contacts/Contacts";


function App() {
  return (
    <Layout>
      <Header/>
      {/* <PageHello/> */}
      {/* <About /> */}
      <Contacts />
      <Footer />
    </Layout>
  )
}

export default App;
