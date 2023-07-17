import {useEffect, useState} from 'react'
import {index as RickText} from 'vtex.rich-text'
import styles from './style.css'

const ConsentLgpd = (props) => {

	const [isElem, setIsElem] = useState(false);

	const handleClick = (e) => {
		e.preventDefault()
		setIsElem(false)
		localStorage.setItem("vtexConsent", "true");
	}
	
	useEffect(() => {
		const vtexConsent = localStorage.getItem("vtexConsent");
		
		if (vtexConsent === null) {
			setIsElem(true)
		}
		
	}, [0]);

	return (
		<>
			{isElem > 0 &&
				<div className={`${styles.consentLgpd}`}>
					<div className={`${styles.wrapLgpd}`}>
						<div>
							<RickText text={props.text01} />							
						</div>
						<button onClick={handleClick}>Concordar e fechar</button>
					</div>
				</div>
			}
		</>
	)
}

export default ConsentLgpd;

ConsentLgpd.defaultProps = {
	text01: `Utilizamos cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Também compartilhamos informações sobre o uso do nosso site com nossos parceiros de mídia social, publicidade e análise. Ao clicar em Continuar, você concorda com o uso de cookies e nossa [Política de Privacidade](/politica-de-privacidade)`
}

ConsentLgpd.getSchema = () => {
    return {
		title: "institucional termo de uso",
		type: "object",
		properties: {
			text01:{
				title: "TEXTO lgpd",
				type: "string",
				default: ConsentLgpd.defaultProps.text01
			},
		},
	};
};
