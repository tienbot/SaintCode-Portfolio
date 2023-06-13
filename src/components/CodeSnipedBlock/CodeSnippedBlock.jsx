import s from "./CodeSnippetBlock.module.css";
import Snippet from "../Snippet/Snippet.jsx";
import ReactEmbedGist from "react-embed-gist";

const CodeSnippedBlock = ({ codeSnippetArr }) => {
//   console.log(codeSnippetArr);
  return (
    <div className={s.wrapper}>
      &#47;&#47; Code snippet showcase:
      {codeSnippetArr.map((elem) => {
        {/* console.log(elem);
        console.log("minakli/" + elem.id); */}
        return (
          <Snippet key={Math.random()} elem={elem}>
            <ReactEmbedGist
              gist={"minakli/" + elem.id}
              wrapperClass="gist__bash"
              className={s.wrapperclass}
              // wrapperClass={s.wrapperclass}
              // wrapperClass={{ background: "#011221" }}
              loadingClass="loading__screen"
              // titleClass="gist__title"
              titleClass={s.titleclass}
              errorClass="gist__error"
              // contentClass="gist__content"
              // contentClass={s.contentclass}
              contentClass={{ background: "#011221" }}
              file={elem[Object.keys(elem)[0]].filename}
              loadingFallback={<p></p>}
              key={Math.random()}
              gistClass={s.gist}
              // style={{ background: "black" }}
            />
          </Snippet>
        );
      })}
    </div>
  );
};

export default CodeSnippedBlock;
