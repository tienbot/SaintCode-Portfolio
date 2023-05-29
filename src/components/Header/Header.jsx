import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderText from "../HeaderText/HeaderText";
import TextComponent from "../TextComponent/TextComponent";
import { PageHello } from "../../Pages/PageHello/PageHello";
import About from "../../Pages/About/About";
import { Projects } from "../../components/Projects/Projects";
import { Contacts } from "../../Pages/Contacts/Contacts";
import Info from "../../components/info/Info";
import personalInfo from "../../components/info/personal_info";

export const Header = () => {
  const infoRef = useRef(null);
  const infoLinesArr = useState([]);
  const [codeSnippetArr, setCodeSnippetArr] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/tienbot/SaintCode-Portfolio/contents")
      .then((response) => response.json())
      .then((data) => {
        setCodeSnippetArr(data);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <header className={s.header}>
        <div className={s.wrapName}>
          <TextComponent text="micheal-weaver" />
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
      {/* <Routes>
        <Route exact path="/" component={PageHello} element={<PageHello />} />
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
      </Routes> */}
    </Router>
  );
};
