import { Helmet } from 'vtex.render-runtime'

function AddHead() {
    const css = `          
        .vtex-store-components-3-x-searchBarInnerContainer--desk-search { position:relative}  
        .vtex-store-components-3-x-portalContainer--desk-search {position: absolute!important;width: 100%!important;top:calc(100% + 5px) !important}
        .vtex-store-components-3-x-portalContainer--desk-search .vtex-store-components-3-x-portalWrapper > .flex.justify-end {position: static!important;}
        .vtex-store-components-3-x-portalContainer--desk-search .vtex-store-components-3-x-portalWrapper > .flex.justify-end > .absolute {position: static!important;width: 100%!important;}
        .vtex-mega-menu-2-x-menuContainer h3 {font-weight: 400;color:#fff}    
        .vtex-login-2-x-container .vtex-button__label .flex.pv2.items-center { padding:0}   
        .vtex-my-account-1-x-menuLinks .flex-column div + div + div + div { display:none}
        .vtex-my-account-1-x-menuLinks .flex-column div + div + div + div + div { display:block}  
        .vtex-product-customizer-2-x-inputValueOptionBox .b--muted-4 { border:none}            
        .vtex-product-customizer-2-x-inputValueOptionBox .c-on-base { margin-right: 0}
        .vtex-product-customizer-2-x-frameAround.ba + div > .c-on-base { color:#006b4f} 
        .dadosPost li { list-style: 17px; font-size: 14px;}
        .dadosPost p { list-style: 17px; font-size: 14px;}
    `
    
    return (
        <>
        <Helmet>            
            <style>{css}</style>                                                
            <meta name="google-site-verification" content="0PDQZ7F0QK50_uU65eXY0GxCbSEbi5C6vK80i4rMiK0" />
        </Helmet>
        </>
    )
}

export default AddHead