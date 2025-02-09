import React from 'react'
import './styles.scss'

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form className="searchBarForm" onSubmit="">
        <div className="searchBarFormInputGroup">
          <input
            type="text"
            className="searchBarFormInput"
            placeholder="O que está procurando?"
          />
        </div>
        <button type="submit" className="searchBarFormButton resetButton">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="searchBarIcon"
          >
            <path
              d="M12.021 2.05969C9.27512 -0.686237 4.80593 -0.686237 2.06 2.05969C-0.685325 4.80621 -0.685325 9.27481 2.06 12.0213C4.50532 14.466 8.31378 14.728 11.0579 12.819C11.1157 13.0922 11.2478 13.3529 11.4603 13.5654L15.4593 17.5644C16.042 18.1459 16.9837 18.1459 17.5635 17.5644C18.1456 16.9822 18.1456 16.0405 17.5635 15.4601L13.5645 11.46C13.3532 11.2493 13.0919 11.1165 12.8187 11.0588C14.7289 8.31406 14.467 4.5062 12.021 2.05969ZM10.7585 10.7588C8.70844 12.8089 5.37202 12.8089 3.32254 10.7588C1.27367 8.70872 1.27367 5.37289 3.32254 3.32282C5.37202 1.27335 8.70844 1.27335 10.7585 3.32282C12.8086 5.37289 12.8086 8.70872 10.7585 10.7588Z"
              fill="black"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
