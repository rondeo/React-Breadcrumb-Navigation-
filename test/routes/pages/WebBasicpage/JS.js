import React from 'react'
import ReactBreadcrumbNavigation from '../../../../src/index'
//import ReactBreadcrumbNavigation from 'react-breadcrumb-navigation'
import JSimg from '../../../imgs/js.jpg'

export default function JS(props){

    return(
        <div>
            <div>
                <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='JS' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  titleSize='1.2rem'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  />
            </div>
            <h1> JS </h1>
            <img src={JSimg} alt='' className='tubiao'></img>
        </div>
    )
}