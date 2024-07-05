import "./Header.scss";


const Header = () => {
  return (
    <div className="header">
      <p>Products List</p>
      <div className="btns">
        <button className="btn">ALL</button>
        <button className="btn">ELEKTRONICS</button>
        <button className="btn">JEWELERY</button>
        <button className="btn">MEN'S CLOTHING</button>
        <button className="btn">WOMEN'S CLOTHING</button>
      </div>
    </div>
  )
}

export default Header;