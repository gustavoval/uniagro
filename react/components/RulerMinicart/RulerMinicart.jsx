import {useEffect, useState} from 'react'
import {index as RickText} from 'vtex.rich-text'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { Spinner } from 'vtex.styleguide'
import styles from './style.css'

const RulerMinicart = (props) => {

	const [isGoal, setIsGoal] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [strGoal, setStrGoal] = useState(0);
    const [strRemaining, setStrRemaining] = useState(0);
    const [styleBar, setStyleBar] = useState(0);
    const { orderForm, loading } = useOrderForm()
    const goal = props.goal; // 100

	useEffect(() => {
		
        const total = orderForm?.value ?? 0; // 40
        console.log(props.tipo)

        if (total > 0) {
            setIsShow(true)
            setStrGoal(parseFloat((goal/100).toFixed(2)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
        } else {
            setIsShow(false)
        }

        if (goal > total) {
            const remaining = (goal - total); // 60
            const bar = (total * 100) / goal;            
            setStyleBar(bar+'%');
            setStrRemaining(parseFloat((remaining/100).toFixed(2)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
            setIsGoal(false)

        } else {
            setIsGoal(true)
        }
		
	}, [orderForm]);

	return (
		<>  
			{props.tipo !== 'Disable' &&
                <div>
                    {isShow &&
                        <div className={`${styles.RulerMinicart}`}>
                            {isGoal ? (
                                <div>
                                    <div className={`${styles.titleGoal} flex`}>
                                        <RickText text={props.text03} />
                                    </div>
                                </div>
                            ) : ( 
                                <div>                                    
                                    <div className={`${styles.title} flex`}><RickText text={props.text01} /> <strong className={`${styles.restante}`}>{strRemaining}</strong> <RickText text={props.text02} /></div>
                                    <div className={`${styles.timeline}`}>
                                        <span
                                            style={{width: styleBar}}
                                            className={props.tipo == 'Frete' ? (`${styles.icon_frete}`) : (`${styles.icon_brinde}`)}></span>
                                    </div>
                                    <div className={`${styles.bar} flex`}>
                                        <div className={`${styles.valStart}`}>R$ 0,00</div>
                                        <div className={`${styles.valEnd}`}>{strGoal}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                </div>
			}
		</>
	)
}

export default RulerMinicart;

RulerMinicart.defaultProps = {
    tipo: `Frete`,
    text01: `Restam`,
    text02: `para ganhar frete grátis`,
    text03: `Eba!!! Você ganhou frete grátis`,    
    goal: 10000
}

RulerMinicart.getSchema = () => {
    return {
		title: "Promotion minicart",
		type: "object",
		properties: {
           
			text01:{
				title: "Texto inicial",
				type: "string",
				default: RulerMinicart.defaultProps.text01
			},
            text02:{
				title: "Texto final",
				type: "string",
				default: RulerMinicart.defaultProps.text02
			},
            text03:{
				title: "Texto sucesso",
				type: "string",
				default: RulerMinicart.defaultProps.text03
			},
            goal: {
                title: "Valor",
				type: "integer",
				default: RulerMinicart.defaultProps.goal
            },
            tipo: {
                title: 'Tipo promoção',
                type: 'string',
                enum: ['Frete', 'Brinde','Disable'], // valores
                enumNames: ['Frete', 'Brinde','Nenhum'], // textos               
                default: RulerMinicart.defaultProps.tipo
            },
		},
	};
};
