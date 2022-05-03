import './item.css'

const Item = ({ name, currentTime, pastTime, color, img, selectedTime }) => {
    let dashboardTime = ""
    if (selectedTime === "day") {
        dashboardTime = "Yesterday"
    } else if (selectedTime === "week") {
        dashboardTime = "Last Week"
    } else if (selectedTime === "month") {
        dashboardTime = "Last Month"
    }
  return (
    <div>
      <div className="colorTab" style={{backgroundColor: color}}>
        <img src={`assets/${img}.svg`} alt="" />
      </div>
      <div className="infoTab">
        <div className="infoTab__header">
            <h2 className="infoTab__title">{name}</h2>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg" className='infoTab__menu'><path className='infoTab__menu--path' d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/></svg>
        </div>
        <div className="timeTab">
            <h3 className='timeTab__current'>{`${currentTime}hrs`}</h3>
            <p className='timeTab__past'>{`${dashboardTime} - ${pastTime}hrs`}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
