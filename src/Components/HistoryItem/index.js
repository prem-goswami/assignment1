import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteElement} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onClickDelete = () => {
    deleteElement(id)
  }

  return (
    <li className="listItem">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logoImg" alt="domain logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <div className="buttonContainer">
        <button className="buttonElement" type="button" testId="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteImg"
            onClick={onClickDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
