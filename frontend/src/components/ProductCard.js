function ProductCard(props){
    return( <div id="idd">
        <h1>ghhggg</h1>
                    {props.id}<br></br>
                    <img src={props.imageURL} height="500dp" width="1251dp" alt="img is loading.. just refresh again to load quickly (:"></img><br></br>
                    Product Name : {props.productname} <br></br> 
                    Product price : {props.price} <br></br><br></br>----------------------------------------------------------------------------------------------------
            </div>);
}

export default ProductCard