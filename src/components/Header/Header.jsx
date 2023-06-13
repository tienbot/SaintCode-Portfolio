import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeaderText from "../HeaderText/HeaderText";
import TextComponent from "../TextComponent/TextComponent";
import { PageHello } from "../../Pages/PageHello/PageHello";
import About from "../../Pages/About/About";
import { Projects } from "..//../Pages/Projects/Projects";
import { Contacts } from "../../Pages/Contacts/Contacts";
import Info from "../info/Info";
import personalInfo from "../info/personal_info";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const infoRef = useRef(null);

  // Array lines for Info left div content
  const [infoLinesArr, setInfoLinesArr] = useState([]);

  // Array code snippets
  const [codeSnippetArr, setCodeSnippetArr] = useState([]);

  // Dividing Info left div content into lines
  useEffect(() => {
    if (infoRef.current) {
      let infoBoxWidth = infoRef.current.getBoundingClientRect().width;

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
        if (currentWidth + wordWidth <= infoBoxWidth - 140) {
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
        // console.log(data);
        // console.log(codeSnippetArr);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <Router>
      <header className={s.header}>
        <div className={s.wrapName}>
          <TextComponent text="micheal-weaver" />
        </div>
        <div onClick={toggleNav} className={s.burger_btn}>
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
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
    <nav className={`${s.nav} ${nav ? s.navActive : ""}`}>
        <ul className={s.ulMobile}>
            <li className={s.li} onClick={() => setNav(false)}>
                <HeaderText title="_hello" to="/" />
            </li>
            <li className={s.li} onClick={() => setNav(false)}>
                <HeaderText title="_about-me" to="/about" />
            </li>
            <li className={s.li} onClick={() => setNav(false)}>
                <HeaderText title="_projects" to="/projects" />
            </li>
            <li className={s.li} onClick={() => setNav(false)}>
                <HeaderText title="_contact-me" to="/contacts" />
            </li>
        </ul>
    </nav>

      <Routes>
        <Route
          exact
          path="/"
          element={<PageHello />}
          component={PageHello}
        />
        <Route
          path="/about"
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
          component={About}
        />
        <Route
          path="/projects"
          element={<Projects />}
          component={Projects}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
          component={Contacts}
        />
      </Routes>
    </Router>
  );
};
