import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";

import { useCar } from "./hooks/useCar";

function App() {
  const {
    products,
    cart,
    addToCart,
    handleRemoveProductFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    cleanCart,
    isEmptyCar,
    carTotal,
  } = useCar();

  return (
    <>
      <Header
        cart={cart}
        handleRemoveProductFromCart={handleRemoveProductFromCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        cleanCart={cleanCart}
        isEmptyCar={isEmptyCar}
        carTotal={carTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {products.map((product) => {
            return (
              <Product
                product={product}
                key={product.id}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
