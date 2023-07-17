import {useEffect, useState} from 'react'
import styles from './style.css'
import { showPostService } from "../../services/showPostService";

const PagePost = () => {
	const [post, setPost] = useState([]);
	const [load, setLoad] = useState(false);

	useEffect(()=>{
		
		const postEntitie = 'RE'
        const regex = /[?&]([^=#]+)=([^&#]*)/g;
        const url = window.location.href;
        const params = {};
        
		let match;

        while(match = regex.exec(url)) {            
            params[match[1]] = decodeURI(match[2]);
        }

        console.log('%cURL: params', 'background:blue; color: #fff')
        console.log(params.id);

		const id = params.id;

        const getPost = async () => {

			const showPost = await showPostService(id);

			if (showPost) {
				console.log(showPost)
				setPost(showPost);
				setLoad(true)
			}
		}
		getPost();
    }, []);


	const RenderPost = () => {
		//if (load > 0) {
			

				const datapost = post.datapost;
				const directions = post.directions;
				const image = '/arquivos/'+post?.image;
				const ingredients = post?.ingredients;
				const name = post?.name;
				const obs = post?.obs;
				const timeprep = post?.timeprep;
				
				return(
					<div className={`${styles.wrapPost}`}>
						<div className="tc">
							<h1 className='vtex-rich-text-0-x-heading--title-section tc'>{name}</h1>
							<p className='tc lh-title f5'>{obs}</p>							
						</div>
						<div className={`${styles.dadosPost} flex`}>
							<div className={`${styles.imagePost} w-50`}>
								<img className='w-100 db h-auto' src={image} />
							</div>
							<div className={`${styles.txtPost} w-50`}>
								<div className={`${styles.ingredients}`}>
									<h2 className='vtex-rich-text-0-x-heading--title-section'>Ingredientes</h2>
									<ul dangerouslySetInnerHTML={{ __html: ingredients }} />
								</div>
								<div className={`${styles.directions}`}>
									<h2 className='vtex-rich-text-0-x-heading--title-section'>Modo de Preparo</h2>							
									<div dangerouslySetInnerHTML={{ __html: directions }} />
								</div>
							</div>
						</div>
					</div>
				)
			
		
    }

	return (
		<>
			<div>
				{load &&
					<RenderPost />
				}
			</div>
		</>
	)
}

export default PagePost;