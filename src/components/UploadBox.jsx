import {useState} from "react"
import './styles.css'
import FileInfo from "./FileInfo.jsx";

function UploadBox({onFileChange}) {
    const [isActive, setActive] = useState(false);
    const [uploadFileInfo, setUploadFileInfo] = useState(null);
    const handleDragStart = () => {
        setActive(true);
    }

    const handleDragEnd = () => {
        setActive(false);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];
        console.log(file);
        onFileChange(file);
        setActive(false);
        setFileInfo(file);
    }

    const setFileInfo = (file) => {
        const {name, size: byteSize, type} = file;
        const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
        setUploadFileInfo({name, size, type});
    }


    return (
        <label className={`file-converter-form-upload-box${isActive ? ' active' : ''}`}
               onDragEnter={handleDragStart}
               onDragOver={handleDragOver}
               onDragLeave={handleDragEnd}
               onDrop={handleDrop}>

            <input type="file" className="file-converter-form-upload-box-file"/>
            {uploadFileInfo && <FileInfo uploadFileInfo={uploadFileInfo}/>}

            {!uploadFileInfo && (
                <p>클릭 혹은 파일을 이곳에 드랍하세요.</p>
            )}

        </label>
    )
}

export default UploadBox