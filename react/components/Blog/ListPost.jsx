import {useEffect, useState} from 'react'
import axios from "axios"
import styles from './style.css'

const ListPost = () => {

    const [isLoad, setIsLoad] = useState(true);
    const [items, setItems] = useState(
        {
            "posts": [],
            "totals": {
                "count": '',
                "pager": ''
            }       
        }
    );

    useEffect(()=>{
        // /receitas/receita?name=fdfdd fd fd&id=254
        
        const regex = /[?&]([^=#]+)=([^&#]*)/g;
        const url = window.location.href;
        const params = {};
        let match;        

        while(match = regex.exec(url)) {            
            params[match[1]] = decodeURI(match[2]);
        }
        console.log('%cURL: params', 'background:blue; color: #fff')
        console.log(params.id);

        const postId = params?.id ?? '';
        
        listPost(postId, 1)

	},[0])

    //list post
    function listPost(filter, page){
        const postEntitie = 'PO'
        const postOptions = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch('/api/dataentities/'+postEntitie+'/search?_fields=id,category,thumb,short&_sort=createdIn DESC', postOptions)
        .then(response => response.json())
        .then(response => {

            if (response.length) {
                
                $.each( response, function( i, val ) {
                
                    if (i < 3) {
                        $('.post.tpl-2 .ct').append(
                            '<div class="box box-banner w-33">'+
                                '<h3 class="fnt flex center"><a href="/receita?nm='+val.urllink+'&id='+val.id+'">'+val.name+'</a></h3>'+
                                '<a class="figure" href="/receita?nm='+val.urllink+'&id='+val.id+'">'+
                                    '<img src="/arquivos/'+val.thumb+'">'+
                                '</a>'+
                                '<div class="action line-3 flex center">'+
                                    '<a class="btn" href="/receita?nm='+val.urllink+'&id='+val.id+'">Ver receita completa</a>'+
                                '</div>'+
                            '</div>'                        
                        )
                    } else {
                        return false
                    }
                })
                
            } else {
                console.log('não encontrado')
            }
            var shelf2 = $('.post.tpl-2 .ct');
            shelf2.slick({
                infinite: false,
                dots: false,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [		      	
                    {
                        breakpoint: 1025,
                           settings: {
                            infinite: true,
                            arrows: true,
                            slidesToShow: 2,
                            slidesToScroll: 1      			
                        }
                    },
                      {
                        breakpoint: 769,
                           settings: {
                            infinite: true,
                            arrows: true,
                               slidesToShow: 1,
                            slidesToScroll: 1      			
                        }
                    }
                    
              ]
            });
        })
        .catch(err => console.error(err));
        
    }

	return (
		<>
			
		</>
	)
}

export default ListPost;