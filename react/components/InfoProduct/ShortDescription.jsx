import React, { useEffect, useState } from "react"
import { useProduct} from 'vtex.product-context'
import styles from './style.css'


const ShortDescription = () => {
    
    const [isShort, setIsShort] = useState(false);
    const [valShort, setValShort] = useState('');
    const product = useProduct();    
	
    useEffect(() => {
        
		const properties = product?.product?.properties ?? [];
        
        //tabela de medida
        if (properties.length) {
            const specifications = product?.product?.specificationGroups ?? [];
            
            if (specifications.length) {
                const index = specifications.findIndex(item => item.name == 'Descrições');                
                const group = specifications[index].specifications;
                
                group.map((item, i) => {
                    
                    if (item.name == 'Descrição Curta') {
                        setValShort(item.values[0])
                        setIsShort(true)
                    }
                })
            }
        }
        
		
	}, [product])

	

	return (
    <>
		<div>
            {isShort && 
                <div className={`${styles.short}`}>
                    <p>{valShort}</p>
                </div>
            }           
		</div>
    </>
  )
}

export default ShortDescription;
