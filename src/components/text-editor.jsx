import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = () => {
    const [editorData, setEditorData] = useState("");

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">CKEditor 5 in React</h2>
            <CKEditor
                key="editor" // Tambahkan ini untuk mencegah masalah re-render
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }}
            />

            <div className="mt-4 p-2 border rounded">
                <h3 className="font-semibold">Preview:</h3>
                <div dangerouslySetInnerHTML={{ __html: editorData }} />
            </div>
        </div>
    );
};

export default TextEditor;
