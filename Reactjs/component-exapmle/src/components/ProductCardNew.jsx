function ProductCardNew(props) {
    return (
        <div className="card w-25">
            <div className="card-header">
                <h1>{props.title}</h1>
            </div>
            <div className="card-body">
                <img src={props.imagePath} alt={props.title} className="card-img-top" />
                <p>{props.price}</p>
                <p>{props.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">Add To Cart</button>
                <button className="btn btn-success">Buy Now</button>
            </div>
        </div>
    );
}
export default ProductCardNew;
