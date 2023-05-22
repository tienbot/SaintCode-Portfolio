import "./Global.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../Layout/Layout";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { PageHello } from "../Pages/PageHello/PageHello";
import About from "../Pages/About/About";
import Info from "../components/info/Info";
import personalInfo from "../components/info/personal_info";


function App() {
  // const { title, description, content } = personalInfo;

  // useRef for Info left div
  const infoRef = useRef(null);

  // Array lines for Info left div content
  const [infoLinesArr, setInfoLinesArr] = useState([]);

  // Dividing Info left div content into lines
  useEffect(() => {
    if (infoRef.current) {
      let infoBoxWidth = infoRef.current.getBoundingClientRect().width;

      // Width for one letter
      let signWidth = 21;

      const text = personalInfo.content;
      let words = text.split(" ");
      let currentLine = "";
      let currentWidth = 0;
      let updatedLine = [];
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let wordWidth = word.length * signWidth;
        if (currentWidth + wordWidth <= infoBoxWidth) {
          currentLine += word += " ";
          currentWidth += wordWidth + signWidth;
        } else {
          updatedLine.push(currentLine);
          currentLine = word += " ";
          currentWidth = wordWidth + signWidth;
        }
      }
      updatedLine.push(currentLine);
      setInfoLinesArr(updatedLine);
    }
  }, []);
  return (
    <Layout>
      <Header />
      {/* <PageHello/> */}
      <About>
        <Info
          infoRef={infoRef}
          infoLinesArr={infoLinesArr}
          description={personalInfo.description}
          title={personalInfo.title}
        />
      </About>
      <Footer />
    </Layout>
  );
}

export default App;
