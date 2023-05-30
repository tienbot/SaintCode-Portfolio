import React, { useState } from 'react';
import s from './Form.module.scss';
import TextComponent from '../TextComponent/TextComponent';
import { Button } from '../Button/Button';
import { ButtonX } from '../ButtonX/ButtonX';
// import FormCode from '../FormCode/FormCode'

export const Form = () => {
  const [name, setName] = useState('Jonathan Davis');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checkedProjects, setCheckedProjects] = useState([]);
  const [buttonXVisible, setButtonXVisible] = useState(false);
  const [buttonXText, setButtonXText] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameClick = () => {
    if (name === 'Jonathan Davis') {
      setName('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleButtonXClick = () => {
    setCheckedProjects([]); // Clear selected projects
    setButtonXVisible(false); // Hide ButtonX
  };
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const today = new Date().toLocaleDateString('en-US', options);
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

  return (
    <div className={s.wrapper}>
        <div className={s.border}>
            <ButtonX onClick={handleButtonXClick}>contacts</ButtonX>
        </div>
        <div className={s.formWrapper}>
            <div className={s.leftContent}>
                <form className={s.form}>
                    <label className={s.label} htmlFor="fname">
                        <TextComponent text="_name:" />
                    </label>
                    <input
                        className={s.input}
                        type="text"
                        id="fname"
                        name="fname"
                        value={name}
                        onChange={handleNameChange}
                        onClick={handleNameClick}
                    />

                    <label className={s.label} htmlFor="email">
                        <TextComponent text="_email:" />
                    </label>
                    <input
                        className={s.input}
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <label className={s.label} htmlFor="message">
                        <TextComponent text="_message:" />
                    </label>
                    <textarea
                        className={`${s.input} ${s.noResize}`}
                        rows="13"
                        cols="30"
                        name="comment"
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                    <Button textBtn="submit-message" />
                </form>
            </div>
            <div className={s.rightContent}>
                <div className={s.textWrapper}>
                    <p>1&nbsp;&nbsp;&nbsp;<span className={s.pink}>const</span> <span className={s.blue}>button</span> <span className={s.pink}>=</span> <span className={s.blue}>document</span>.<span className={s.blue}>querySelector</span>(<span className={s.orange}>'#sendBtn'</span>);</p>
                    <p>2&nbsp;&nbsp;&nbsp;</p>
                    <p>3&nbsp;&nbsp;&nbsp;<span className={s.pink}>const</span> <span className={s.blue}>message</span> <span className={s.pink}>= </span>&#123;</p>
                    <p>4&nbsp;&nbsp;&nbsp;<span className={s.blue}>&nbsp;name</span>:<span className={s.orange}>&nbsp;"{name}"</span>,</p>
                    <p>5&nbsp;&nbsp;&nbsp;<span className={s.blue}>&nbsp;email</span>:<span className={s.orange}>&nbsp;"{email}"</span>,</p>
                    <p>6&nbsp;&nbsp;&nbsp;<span className={s.blue}>&nbsp;message</span>:<span className={s.orange}>&nbsp;"{message}"</span>,</p>
                    <p>7&nbsp;&nbsp;&nbsp;&nbsp;date:<span className={s.orange}>&nbsp;"{today}"</span></p>
                    <p>8&nbsp;&nbsp;&nbsp;&#125;</p>
                    <p>9&nbsp;&nbsp;&nbsp;</p>
                    <p>10&nbsp;&nbsp;&nbsp;<span className={s.blue}>button</span>.<span className={s.blue}>addEventListener</span>(<span className={s.orange}>'click'</span>, () <span className={s.pink}>=&gt; </span>&#123;</p>
                    <p>11&nbsp;&nbsp;&nbsp;<span className={s.blue}>&nbsp;form</span>.<span className={s.blue}>send</span>(<span className={s.blue}>message</span>);</p>
                    <p>12&nbsp;&nbsp;&nbsp;&#125;)</p>
                    {/* <FormCode/> */}
                </div>
            </div>
        </div>
    </div>
  );
};
