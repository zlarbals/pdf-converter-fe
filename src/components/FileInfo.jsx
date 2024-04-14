function FileInfo({uploadFileInfo}) {

    return (
        <ul className="file-converter-form-file-info">
            {Object.entries(uploadFileInfo).map(([key, value]) => (
                <li key={key}>
                    <span className="file-converter-form-file-info-key">{key}</span>
                    <span className="file-converter-form-file-info-value">{value}</span>
                </li>
            ))}
        </ul>
    )
}

export default FileInfo