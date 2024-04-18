export default function Product({ product, addToCart }) {
  return (
    <div
      className="col-md-6 col-lg-4 my-4 row align-products-center"
      key={product.id}
    >
      <div className="col-4">
        <img
          className="img-fluid"
          src={`img/${product.image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">
          {product.name}
        </h3>
        <p>{product.description}</p>
        <p className="fw-black text-primary fs-3">{`$${product.price}`}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCart(product)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
