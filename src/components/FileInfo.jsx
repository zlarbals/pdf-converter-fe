function FileInfo({uploadFileInfo}) {

    return (
        <ul className="fileInfo">
            {Object.entries(uploadFileInfo).map(([key, value]) => (
                <li key={key}>
                    <span className="fileInfo_key">{key}</span>
                    <span className="fileInfo_value">{value}</span>
                </li>
            ))}
        </ul>
    )
}

export default FileInfo