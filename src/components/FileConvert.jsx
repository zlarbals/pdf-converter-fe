import { useState } from "react"

function FileConvert() {
  const [inputFile, setInputFile] = useState(null);

  const handleFileChange = (e) => {
    setInputFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if(!inputFile){
      console.log('파일을 선택하세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', inputFile);

    try {
      const response = await fetch('http://localhost:8080/convert/convertToPdf',{
        method: 'POST',
        body: formData
      });

      console.log(response);

      if(response.ok){
        const byteArray = await response.arrayBuffer();
        const blob = new Blob([byteArray]);
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.setAttribute('download','ConvertFile.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeCheld(downloadLink);
      }else{
        console.error('파일 변환에 실패했습니다.');
      }
    }catch(error){
      console.error('네트워크 오류', error);
    }
  };


  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>pdf 변환</button>
    </div>
  )
}

export default FileConvert