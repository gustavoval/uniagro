import React from "react"
import { useProduct } from 'vtex.product-context'
import styles from './style.css'

const InfoProduct = () => {

  const productContextValue = useProduct()
  
  console.log("productContextValue --> ", productContextValue)

  //const allCategories = productContextValue?.product.categories
  //const lastCategory = allCategories[0].split('/');
  //const showCategory = lastCategory[lastCategory.length - 2];

  const available = productContextValue?.selectedItem.sellers[0].commertialOffer.AvailableQuantity
  const complementName = productContextValue?.selectedItem?.complementName;


  //console.log(showCategory)
  
  return (
    <>
      <div className={`${styles.infoProduct}`}>
        <p className={`${styles.reference}`}>Código do produto: <span>{complementName}</span></p>        
        {available <= 40 && available !== 0 ? <p className={`${styles.available}`}>Produtos restantes: <strong>{available} un.</strong></p> : <></> }
      </div>
    </>
  )

}

export default InfoProduct;
