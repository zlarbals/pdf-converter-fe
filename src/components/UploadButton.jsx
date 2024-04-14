import './styles.css'

function UploadButton({onClickChange}) {
    return (
        <div className="center">
            <button className="button" onClick={onClickChange}>pdf 변환</button>
        </div>
    )
}

export default UploadButton;