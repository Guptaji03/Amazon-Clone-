
import style from "../Css/CheckoutProduct.module.css"
const CheckoutProduct = ({obj}) => {

  return (
    <div className={style.container}>
       <img src={obj.image} alt="product_image" />
       <div className={style.qnt}>

       <div className={style.name}>
        
         <h4>{obj.name} 
          &nbsp;
         <h5>Rs.{obj.price}</h5></h4>

          
         <p> <h4>Description</h4>
             {obj.description}</p>
            
            
       </div>

      

       </div>
    </div>
  )
}

export default CheckoutProduct
