import s from "./Global.module.css";
import { Layout } from "../Layout/Layout";
import Footer from '../components/Footer/Footer'
import { PageHello } from '../Pages/PageHello/PageHello'

function App() {
  return (
    <Layout>
        <header>Хедер</header>
        <PageHello/>
        <Footer/>
    </Layout>
  )
}

export default App;