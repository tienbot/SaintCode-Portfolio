import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

function FormCode() {
  const code = `const button = document.querySelector('#sendBtn');

  const message = {
      name: "Jonathan Davis",
      email: "jonathan-davis@gmail.com",
      message: "",
      date: "Thu 21 Apr"
  }
  
  button.addEventListener('click', () => {
      form.send(message);
  })`;

  return (
    <SyntaxHighlighter language="javascript" style={nightOwl} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
}

export default FormCode;