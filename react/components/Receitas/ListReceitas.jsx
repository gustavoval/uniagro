import React, { useState, useEffect } from "react"
import { Link } from 'vtex.styleguide'
import styles from './style.css'


const ListReceitas = (props) => {
    
    let receitas = [
        
        {
            titulo: "O que é Lorem Ipsum?",
            subtitulo: "Lorem Ipsum",
            pagina: '#!',
            capa: ''
            

        }
    ]
    if (props.receitas !== undefined) {
        receitas = props.receitas
    }

    const RenderReceitas = () => {

        return receitas.map(function(item, i){
            let titulo = item.titulo;
            let subtitulo = item.subtitulo;
            let capa = item.capa;
            let pagina = item.pagina;
            
            return(
                <div>
                    <Link to={pagina} ><img src={capa} /></Link>
                    <h3>{titulo}</h3>
                    <p>{subtitulo}</p>
                </div>
            )
        })
    }

    return (
        <>
            <div className={`${styles.c}`}>                
                <div className={`${styles.linkReceitas} mb5 flex items-center justify-center`}>
                    <div className={`${styles.boxReceitas}`}>
                        <RenderReceitas />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListReceitas;


ListReceitas.getSchema = () => {
    return {
		title: "Perguntas",
		type: "object",
		properties: {
			receitas: {
			   type: 'array',
			   title: 'Perguntas',
			   default: [
				  {
					titulo: 'Text alternative',
                    subtitulo: '',
                    pagina: '',
                    capa: ''
				  }
			   ],
			   items: {
				  type: 'object',
				  title: 'Receitas',
				  properties: {
                    titulo: {
						type: 'string',
						title: 'Título da receita',
						description: ''
					},
                    subtitulo: {
						type: 'string',
						title: 'Descrição curta',
                        description: ''
					},
                    pagina: {
						type: 'string',
						title: 'Url da página',
                        description: ''
					},
                    capa: {
                        title: 'Imagem de capa',
                        default: '',
                        type: 'string',
                        widget: {
                            "ui:widget": "image-uploader"
                        }
                    }
				  }
			   }
			}
		}
	};
};