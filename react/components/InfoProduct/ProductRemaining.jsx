import React, { useEffect, useState } from "react"
import { useProduct} from 'vtex.product-context'

const ProductRemaining = () => {
    const product = useProduct();
    const [inStock, setInStock] = useState(0)
	
    useEffect(() => {
        
		const selectedItem = product?.selectedItem ?? [];

        //produtos restantes
        if (selectedItem) {
            const sellers = selectedItem?.sellers;
		    const indexDefault = sellers.findIndex(item => item.sellerDefault === true);
            setInStock(sellers[indexDefault]?.commertialOffer?.AvailableQuantity);
        }
        
		
	}, [product])

	

	return (
    <>
		<div>            
            {inStock > 0 && inStock <= 20 &&                
                <p>Aproveite! Restam apenas <strong>{inStock}</strong> <span>unidade{inStock > 1 && `s` }</span></p>                                  
            }
		</div>
    </>
  )
}

export default ProductRemaining;
