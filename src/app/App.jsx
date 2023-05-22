import s from "./Global.module.css";
import { Layout } from "../Layout/Layout";
import {Header} from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { PageHello } from "../Pages/PageHello/PageHello";
import { Contacts } from "../Pages/Contacts/Contacts";
import About from "../Pages/About/About";
import {Projects} from "../components/Projects/Projects"


function App() {
  return (
    <Layout>
      <Header/>
      {/* <PageHello/> */}
      {/* <Contacts/> */}
      {/* <About /> */}
      <Projects/>
      <Footer />
    </Layout>
  )
}

export default App;
