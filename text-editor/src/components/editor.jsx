import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import './editor.css';

const Editor = () => {
    const editorRef = useRef(null);
    const [content, setContent] = useState('');

    const config = {
        placeholder: "Start typing..."
    };

    return (
        <div>
            <h1>Editor for the HTML</h1>
            <div className="left-container">
                <JoditEditor
                    ref={editorRef}
                    value={content}
                    onChange={newContent => setContent(newContent)}
                    config={config}
                />
            </div>
            <div className="right-container">
            </div>
            <h2>HTML Source Code!</h2>
            <pre>{content}</pre> 
            {/* Use <pre> for better formatting */}
        </div>
    );
};

export default Editor;
