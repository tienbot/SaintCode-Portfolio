import "./Global.module.css";
import React from "react";
import { Layout } from "../Layout/Layout";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
    return (
        <Layout>
        <Header />
        <Footer />
        </Layout>
    );
}

export default App;