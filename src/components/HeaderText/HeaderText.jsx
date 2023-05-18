import React from "react";
import { NavLink } from "react-router-dom";
import s from "./HeaderText.module.scss";

function HeaderText(props) {
  const { title, to } = props;
  return (
    <NavLink to={to} activeClassName={s.active} className={s.HeaderText}>
      {title}
    </NavLink>
  );
}

export default HeaderText;

// как подключать в App.jsx

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router> // нужно обернуть им ВЕСЬ код
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </Router>
//   );
// }
