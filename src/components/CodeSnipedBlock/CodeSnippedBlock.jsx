import s from "./CodeSnippetBlock.module.css";
import Snippet from "../Snippet/Snippet.jsx";
// import codeSnippetArr from "../../app/App.jsx"

const CodeSnippedBlock = ({ codeSnippetArr }) => {
  return (
    <div className={s.wrapper}>
      &#47;&#47; Code snippet showcase:
      {codeSnippetArr.map((elem) => {
        console.log(elem);
        return <Snippet />;
      })}
    </div>
  );
};

export default CodeSnippedBlock;
