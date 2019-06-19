import React from 'react'
import ReactBreadcrumbNavigation from '../../../../src/index'
import NextJSimg from '../../../imgs/Next.png'

export default function NextJS(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='NextJS' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  titleSize='1.2rem'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  />
            </div>
            <h1>NextJS</h1>
            <img src={NextJSimg} alt = '' className='tubiao'></img>
        </div>
    )
}