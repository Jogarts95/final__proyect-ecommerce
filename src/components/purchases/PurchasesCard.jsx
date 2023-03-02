import React from "react";
import { formatDateDDMMYYYY } from "../../utils/date";
import './styles/PurchasesCard.css'

const PurchasesCard = ({ purchase }) => {
  return (
    <article className="purchasesCard">
      <div className="purchasesCard__containerImg">
        <div className="purchasesCard__img">
          <img src={purchase.product.images[0].url} alt="" />
        </div>
        <h4 className="purchasesCard__title">{purchase.product.title}</h4>
      </div>

      <div className="purchasesCard__containerInfo">
        <h4 className="purchasesCard__DDMMYYYY">{formatDateDDMMYYYY(purchase.createdAt)}</h4>
        <div className="purchasesCard__containerQuantity">
          <h4 className="purchasesCard__quantity">{purchase.quantity}</h4>
        </div>
            <h4 className="purchasesCard__price">${purchase.product.price}</h4>
      </div>
    </article>
  );
};

export default PurchasesCard;
