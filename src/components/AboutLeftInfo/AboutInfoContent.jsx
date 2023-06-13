import React from 'react';

const AboutInfoContent = ({ activeToggle }) => {
  let leftContent = null;

  switch (activeToggle) {
    case 'Experiance':
      leftContent = <div>Experience content</div>;
      break;
    case 'Skills':
      leftContent = <div>Skills content</div>;
      break;
    case 'Certificates':
      leftContent = <div>Certificates content</div>;
      break;
    case 'bio':
      leftContent = <div>Bio content</div>;
      break;
    case 'interests':
      leftContent = <div>Interests content</div>;
      break;
    case 'education':
      leftContent = <div>Education content</div>;
      break;
    case 'Music':
      leftContent = <div>Music content</div>;
      break;
    case 'Hiking':
      leftContent = <div>Hiking content</div>;
      break;
    case 'Books':
      leftContent = <div>Books content</div>;
      break;
    default:
      break;
  }

  return <div>{leftContent}</div>;
};
export default AboutInfoContent;