import React, { useState, useEffect } from "react"
import { useProduct } from 'vtex.product-context'
import styles from './style.css'

const ProductSelos = () => {

    const product = useProduct();
    const [itemSelo, setItemSelo] = useState(false);

    useEffect(() => {
		const cluster = product?.product?.productClusters ?? [];
        if (cluster.length) {
            return cluster.map(function(item, i){
                if (item.id == '157') {
                    setItemSelo(true)
                }
            })
        }
	}, [product])


    //console.log(showCategory)
    
    return (
        <>
            {itemSelo &&
                <div className={`${styles.selo_image}`}><img src="https://steck.vteximg.com.br/arquivos/selo-consumidor.png" /></div>
            }
        </>
    )

}

export default ProductSelos;
