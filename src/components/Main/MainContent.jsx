import React from 'react'
import ProductsContainer from './ProductsContainer'

const MainContent = () => {
    return (
        <main className="main-content">
            <h2 className="main-content__h2">Mais Vendidos</h2>
            <hr/>
            <ProductsContainer />
        </main>
    )
}

export default MainContent
