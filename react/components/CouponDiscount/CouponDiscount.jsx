import React, { useState, useEffect } from "react"
import { Spinner } from 'vtex.styleguide'
import styles from './style.css'

const CouponDiscount = (props) => {
	const [isLoad, setIsLoad] = useState(true);
	const title = props.title;
	const couponCode = props.couponCode;
	const discountDescription1 = props.discountDescription1;
	const discountPercentage = props.discountPercentage;
	const discountDescription2 = props.discountDescription2;


	const [isActive, setIsActive] = useState(false);
	
	const handleClick = (e) => {
		e.preventDefault()

		let textoCopiado = document.getElementById("couponName");
		textoCopiado.select();
		textoCopiado.setSelectionRange(0, 99999)
		document.execCommand("copy");
		setIsActive(current => !current);
	}

	useEffect(()=>{
		setIsLoad(false)
	},[0])
	
	
	return (
		<>
		
			<div className={`${styles.coupon__discount}`}>        
				{isLoad ? (
					<Spinner color="currentColor" size={15} />
				) : (
					<div className={`${styles.coupon__wrap}`}>
					<div className={`${styles.coupon__title}`}>
						<p className={`${styles.coupon__text1}`}>{title} <strong>{discountPercentage}</strong></p>
						<p className={`${styles.coupon__text2}`}>{discountDescription1}<strong>{discountDescription2}</strong></p>
					</div>
					
					<div className={`${styles.coupon__form}`}>
						<p>Utilize o cupom</p>
						<div className={`${styles.coupon__group}`}>
							<input id="couponName" className={`${styles.coupon__input}`} readOnly={true} value={couponCode} name="name" label="name" />
							<button type="submit" onClick={handleClick} style={{
								backgroundColor: isActive ? '#11BE6B' : 'white',
								color: isActive ? 'white' : '#222',
							}}>{ isActive ? 'Copiado' : 'Copiar' }</button>
						</div>
					</div>
					</div>
				)}          
			</div>
		
		</>
	)
}

CouponDiscount.defaultProps = {
	title: 'Garanja já',
	couponCode: 'BEMVINDO10',
	discountPercentage: '10% de desconto*',
	discountDescription1: '*na primeira compra',
	discountDescription2: ''
}

CouponDiscount.schema = {
	title: 'editor de cupom de desconto na home',
	description: 'editor.coupon.description',
	type: 'object',

	properties: {
		title: {
			title: 'Titulo',
			type: 'string',
			default: null,
		},
		couponCode: {
			title: 'Codigo do cupom',
			type: 'string',
			default: null,
		},
		discountDescription1: {
			title: 'Descrição 1',
			type: 'string',
			default: null,
		},
		discountPercentage: {
			title: 'Porcentagem de desconto',
			type: 'string',
			default: null,
		},
		discountDescription2: {
			title: 'Descrição 2',
			type: 'string',
			default: null,
		},
	},
}

export default CouponDiscount;