import './header.css'

const Header = ({onChildClick, selectedTime}) => {

    function handleClick(event) {
        onChildClick(event.target.innerHTML);
    }

  return (
    <header>
        <div className="titleCard">
            <img src="assets/image-jeremy.png" alt="Jeremy Robson" className="titleCard__avatar" />
            <div className="titleCard__text">
                <p className="titleCard__desc">Report for</p>
                <h1 className="titleCard__title">Jeremy Robson</h1>
            </div>
        </div>
        <nav className='nav'>
        <ul className='nav__list'>
            <li className={selectedTime === "day" ? "nav__link--active" : "nav__link"} onClick={handleClick}>Daily</li>
            <li className={selectedTime === "week" ? "nav__link--active" : "nav__link"} onClick={handleClick}>Weekly</li>
            <li className={selectedTime === "month" ? "nav__link--active" : "nav__link"} onClick={handleClick}>Monthly</li>
        </ul>
        </nav>
    </header>
  )
}

export default Header