import {useState} from "react"
import UploadBox from "./UploadBox";
import UploadButton from "./UploadButton.jsx";

function FileConvert() {
    const [inputFile, setInputFile] = useState(null);

    const handleFileChange = (file) => {
        setInputFile(file);
    };

    const handleUpload = async () => {
        if (!inputFile) {
            alert('파일을 선택하세요.')
            return;
        }

        const formData = new FormData();
        formData.append('file', inputFile);

        try {
            const response = await fetch('http://localhost:8080/convert/convertToPdf', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const byteArray = await response.arrayBuffer();
                const blob = new Blob([byteArray]);
                const url = URL.createObjectURL(blob);
                const downloadLink = document.createElement('a');
                downloadLink.href = url;
                downloadLink.setAttribute('download', 'ConvertFile.pdf');
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink)
            } else {
                alert('파일 변환에 실패했습니다.')
            }
        } catch (error) {
            alert('네트워크 오류 발생 \n잠시후 시도해보세요!')
        }
    };


    return (
        <div>
            <UploadBox onFileChange={handleFileChange}/>
            <UploadButton onClickChange={handleUpload}/>
        </div>
    )
}

export default FileConvert