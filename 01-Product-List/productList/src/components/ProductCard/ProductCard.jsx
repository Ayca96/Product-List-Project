import "./ProductCard.scss";
import veri from "../../helper/data.js";

const ProductCard = () => {
  return (
    <div className="card-container">
    {veri.map(({id, title, price,description,category,rating,image})=>{
      return(
        <div className="cards" key={id}>
        <div className="price">
          <h3>{price}</h3>
        </div>
          <img src={image} alt="resim" />
          <div className="card-over">
            <h2 className="title">{title}</h2>
          </div>
        </div>
       
      );
    })};
  
    </div>
  )
}

export default ProductCard