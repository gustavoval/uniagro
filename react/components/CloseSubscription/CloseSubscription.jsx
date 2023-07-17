import React, { useEffect } from "react"
import { useOrderForm } from 'vtex.order-manager/OrderForm'

const CloseSubscription = () => {
    const { orderForm } = useOrderForm()

    useEffect(()=>{
        var el = document.querySelector(".vtex-modal-layout-0-x-paper--modal-subscription .vtex-modal-layout-0-x-closeButton");    
        if (el) {
            setTimeout(() => {
                el.click();
            }, "500");
        }
    },[orderForm])
    
    
    return (
        <>           
        </>
    )

}

export default CloseSubscription;
