import React, { useState, useEffect } from "react"
import { useProduct } from 'vtex.product-context'
import styles from './style.css'

const ImageDescription = () => {

  const productContext = useProduct() 
  const [hasImage, setHasImage] = useState(false) 
  const [image, setImage] = useState('')

  useEffect(() => {
    console.log(productContext)
    setHasImage(false)
    const images = productContext?.selectedItem.images;
    

    images.map((image, i) => {
      console.log(image.imageLabel)
      if (image.imageLabel == 'descricao') {
        setImage(image.imageUrl)
        setHasImage(true)
      }
  })
    
}, [productContext])
  


  //console.log(showCategory)
  
  return (
    <>
      <div className={`${styles.imageProduct}`}>
        {hasImage &&
          <img src={image} />
        } 
      </div>
    </>
  )

}

export default ImageDescription;
