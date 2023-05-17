import React from 'react';
import s from './Header.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderText from '../HeaderText/HeaderText';
import TextComponent from '../TextComponent/TextComponent';

const Hello = () => <p>_hello</p>;
const AboutMe = () => <p>_about-me</p>;
const Projects = () => <p>_projects</p>;
const Contacts = () => <p>_contacts</p>;

export const Header = () => {
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
              <HeaderText title="_contats" to="/contacts" />
            </li>
          </ul>
        </nav>
        
      </header>
      <Routes>
        <Route exact path="/" component={Hello} />
        <Route path="/about" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
      </Routes>
    </Router>
  );
};
