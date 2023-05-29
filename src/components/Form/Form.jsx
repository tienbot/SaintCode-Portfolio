import React, { useState } from 'react';
import s from './Form.module.scss';
import TextComponent from '../TextComponent/TextComponent';
import { Button } from '../Button/Button';
import { ButtonX } from '../ButtonX/ButtonX';

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

  return (
    <div className={s.wrapper}>
        <div class="Projects_border__MGs97">
                <div className={s.border}>
                    <ButtonX onClick={handleButtonXClick}>contacts</ButtonX>
                </div>
        </div>
        {/* <div className="formWrapper"></div> */}
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
  );
};
