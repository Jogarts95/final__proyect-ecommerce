import React from "react";
import { useDispatch } from "react-redux";
import {deleteProductCart, updateProductCart,} from "../../store/slices/card.slice";
import './styles/CartProduct.css'

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteCartProduct = () => {
    dispatch(deleteProductCart(product.id));
  };

  const handleClickPlus = () => {
    const newQuantity = product.quantity + 1;
    const data = {
      quantity: newQuantity,
    };
    dispatch(updateProductCart(product.id, data));
  };

  const handleClickLess = () => {
    const newQuantity = product.quantity - 1;
    if (newQuantity <= 0) {
      dispatch(deleteProductCart(product.id));
    } else {
      const data = {
        quantity: newQuantity,
      };
      dispatch(updateProductCart(product.id, data));
    }
  };

  return (
    <article className="cartProduct">
      <div className="cartProduct__img">
        <img src={product.product.images[0].url} alt="" />
      </div>
      <section className="cartProduct__info">
        <h3 className="cartProduct__title">{product.product.title}</h3>

        <div className="cartProduct__containerQuantity">
          <button onClick={handleClickLess}>-</button>
          <h3 className="cartProduct__quantity">{product.quantity}</h3>
          <button onClick={handleClickPlus}>+</button>
        </div>
      </section>

      <section className="cartProduct__InfoTotal">
        <i onClick={handleDeleteCartProduct} className="bx bx-trash"></i>
        <div className="cartProduct__InfoTotal-c">
        <h3 className="cartProduct__InfoTotal-title">Total:</h3>
        <h3 className="cartProduct__InfoTotal-total">${product.quantity * product.product.price}</h3>
        </div>
      </section>
    </article>
  );
};

export default CartProduct;
