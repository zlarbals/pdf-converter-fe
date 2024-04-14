import './styles.css'

function UploadButton({onClickChange}) {
    return (
        <div className="file-converter-center">
            <button className="file-converter-form-upload-button" onClick={onClickChange}>pdf 변환</button>
        </div>
    )
}

export default UploadButton;