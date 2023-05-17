import s from "./Global.module.css";
import { Layout } from "../Layout/Layout";
import Footer from "../components/Footer/Footer";
import { PageHello } from "../Pages/PageHello/PageHello";
import About from "../Pages/About/About";

function App() {
  return (
    <Layout>
      <header>Хедер</header>
      {/* <PageHello/> */}
      <About />
      <Footer />
    </Layout>
  );
}

export default App;
