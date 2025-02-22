import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // Inline styles
  const containerStyle = {
    height: "100vh",
    width: "100%",
    display: "flex"
  };

  const editorStyle = {
    width: "50%",
    height: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff"
  };

  const previewStyle = {
    width: "50%",
    height: "100%",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderLeft: "2px solid #000",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const editorInputStyle = {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "10px"
  };

  return (
    <div style={containerStyle}>
      {/* Editor Section */}
      <div style={editorStyle}>
        <h1 style={headingStyle}>Editor</h1>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
          style={editorInputStyle}
        />
      </div>

      {/* Preview Section */}
      <div style={previewStyle}>
        <h1 style={headingStyle}>HTML Source Code</h1>
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        {content}
      </div>
    </div>
  );
}

export default App;
