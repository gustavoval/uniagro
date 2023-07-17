import React, { useEffect, useState } from "react"
import { useProduct} from 'vtex.product-context'
import { Spinner } from 'vtex.styleguide'
import styles from './style.css'


const ShelfIcon = () => {

    const product = useProduct();   
    const [isLoad, setIsLoad] = useState(true)  
    const [listProperties, setListProperties] = useState([])
    const map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"," ":"-","&":"e"};

    function strToClass(s){		
		return s.replace(/[\W\[\] ]/g,function(a){return map[a]||a}).toLowerCase();      
	}
	
    useEffect(() => {
        console.log(product)
		const properties = product?.product?.properties ?? [];
        
        if (properties.length) {
            const index = properties.findIndex(item => item.name == 'Benefícios');

            if (index != -1) {
                setListProperties(properties[index].values);                                
            }
        }
        setIsLoad(false)
	}, [product])

    const RenderIcons = () => {        
        if (listProperties.length) {            
            return listProperties.map(function(item, i){
                let image = "/arquivos/ic-"+strToClass(item)+".jpg";
                let name = item;

                return (
                    <div className={`${styles.__icon}`}>                                                
                        <img src={image} />
                        <p>{name}</p>
                    </div>
                )
            })

        } else {
            return false
        }
    }

	return (
    <>
		{isLoad ? (
            <Spinner color="currentColor" size={15} />
        ) : (
            <div className={`${styles.shelf__icon}`}>
                <RenderIcons />
            </div>
        )}
    </>
  )
}

export default ShelfIcon;
