import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

const {initialHistoryList} = this.props

class HistoryApp extends Component {
  state = {
    searchInput: '',
    finalList: initialHistoryList,
  }

  onChangeSearchinput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteElement = id => {
    const updatedList = initialHistoryList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({finalList: updatedList})
  }

  render() {
    const {searchInput, finalList} = this.state

    const searchedResults = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const searchedResultsLength = searchedResults.length

    return (
      <div className="bgContainer">
        <div className="headerContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
              className="searchLogo"
            />
            <input
              type="search"
              placeholder="search"
              className="searchBar"
              onChange={this.onChangeSearchinput}
            />
          </div>
        </div>
        <ul className="historyItemContainer">
          {finalList.map(eachItem => (
            <HistoryItem
              historyDetails={eachItem}
              searchedResultsLength={searchedResultsLength}
              deleteElement={this.deleteElement}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default HistoryApp
