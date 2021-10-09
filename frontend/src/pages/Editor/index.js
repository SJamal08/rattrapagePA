import React from 'react'
import Editor from "@monaco-editor/react";

function EditorPage() {

    const handleEditorChange = (value, event) => {
        console.log("here is the current model value:", value);
    }
    return (
        <div>
            <h2>Editor page</h2>

            <Editor
                height="90vh"
                theme="vs-dark"
                defaultLanguage="c"
                defaultValue="// some comment"
                onChange={handleEditorChange}
            />
        </div>
    )
}

export default EditorPage
