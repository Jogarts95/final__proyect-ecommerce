import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/Cart/CartProduct";
import { getAllCartProducts, purchaseCart } from "../store/slices/card.slice";
import './styles/Cart.css'

const Cart = () => {
  const { products } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const totalPriceCard = products.reduce(
    (total, product) => total + product.quantity * product.product.price,
    0
    );
  
  const handlePurchaseCart = () => {
    dispatch(purchaseCart())
  }
    
  useEffect(() => {
    dispatch(getAllCartProducts());
  }, []);

  return (
    <main className="cart">
      <h3 className="cart__title">Shopping cart</h3>
      <section className="cart__container">
        {products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </section>
      <hr />
      <section className="cart__containerTotal">
        <div className="cart__totalInfo">
          <h3 className="cart__totalTitle">Total</h3>
          <h3 className="cart__total">${totalPriceCard}</h3>
        </div>
        <button className="cart__checkout" onClick={handlePurchaseCart}>Checkout</button>
      </section>
    </main>
  );
};

export default Cart;
