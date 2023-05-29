import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderText from "../HeaderText/HeaderText";
import TextComponent from "../TextComponent/TextComponent";
import { PageHello } from "../../Pages/PageHello/PageHello";
import About from "../../Pages/About/About";
import { Projects } from "../Projects/Projects";
import { Contacts } from "../../Pages/Contacts/Contacts";
import Info from "../info/Info";
import personalInfo from "../info/personal_info";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai" //add Zhazgul21, что то работает некорректно

export const Header = () => {
    const [nav, setNav] = useState(true); //add Zhazgul21, что то работает некорректно


    const infoRef = useRef(null);

    // Array lines for Info left div content
    const [infoLinesArr, setInfoLinesArr] = useState([]);
  
    // Array code snippets
    const [codeSnippetArr, setCodeSnippetArr] = useState([]);
  
    // Dividing Info left div content into lines
    useEffect(() => {
      if (infoRef.current) {
        let infoBoxWidth = infoRef.current.getBoundingClientRect().width;
        console.log(infoBoxWidth)
  
        // Width for one letter
        let signWidth = 16;
  
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
    useEffect(() => {
      fetch("https://api.github.com/users/Minakli/gists")
        .then((response) => response.json())
        .then((data) => {
          setCodeSnippetArr(data);
          console.log(data);
          console.log(codeSnippetArr);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

  return (
    <Router>
      <header className={s.header}>
        <div className={s.wrapName}>
          <TextComponent text="micheal-weaver" />
        </div>
        <div onClick = {() => setNav(!nav)} className={s.burger_btn}>
          {nav ? <AiOutlineMenu size={22}/> : <AiOutlineClose size={22} />}
        </div>
        <nav className={s.nav}>
          <ul className={s.ul}>
            <li className={s.li}>
              <HeaderText title="_hello" to="/" />
            </li>
            <li className={s.li}>
              <HeaderText title="_about-me" to="/about" />
            </li>
            <li className={s.li}>
              <HeaderText title="_projects" to="/projects" />
            </li>
          </ul>
          <ul className={s.ul}>
            <li className={s.li}>
              <HeaderText title="_contact-me" to="/contacts" />
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route exact path="/" component={PageHello} element={<PageHello/>}/>
        <Route 
            path="/about" 
            component={About} 
            element={
                <About codeSnippetArr={codeSnippetArr}>
                    <Info
                        infoRef={infoRef}
                        infoLinesArr={infoLinesArr}
                        description={personalInfo.description}
                        title={personalInfo.title}
                    />
                </About>
            }
        />
        <Route path="/projects" component={Projects} element={<Projects />} />
        <Route path="/contacts" component={Contacts} element={<Contacts />} />
      </Routes>
    </Router>
  );
};
