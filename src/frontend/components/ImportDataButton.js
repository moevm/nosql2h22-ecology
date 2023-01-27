import { ChangeEvent, useState } from 'react';
import './styles.css'

function ImportDataButton() {
    const [file, setFile] = useState();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        // 👇 Uploading the file using the fetch API to the server
        fetch('http://localhost:5000/import', {
            method: 'POST',
            body: file,
            // 👇 Set headers manually for single file upload
            headers: {
                'content-type': file.type,
                'content-length': `${file.size}`, // 👈 Headers need to be a string
            },
        })
            // .then((res) => res.json())
            .then((data) => console.log(data))
            // .catch((err) => console.error(err));
    };

    return (
        <div className="import-button">
            <input type="file" onChange={handleFileChange} />

            <div>{file && `${file.name} - ${file.type}`}</div>

            <button onClick={handleUploadClick}>Upload</button>
        </div>
    );
}

export default ImportDataButton;