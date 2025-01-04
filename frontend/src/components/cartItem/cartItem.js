import React from "react"
import styles from "./cartItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons';
function CartItem({ items, onRemove }) {
    return (
        <>
            {items.map((item) => (
                <div className={styles.cart_item}>
                    <img src={item.image} alt={item} className={styles['image']} />
                    <div className={styles.remove} onClick={() => onRemove(item.productId)}>x</div>
                    <div className={styles.details}>
                        <h3 className={styles.name}>{item.name}</h3>

                        <p className={styles.detail}>Gender: {item.gender}</p>
                        <p className={styles.detail}>
                            Color:   <FontAwesomeIcon icon={faSquare} style={{ color: item.color }} />
                        </p>
                        <p className={styles.detail}>Quantity: {item.quantity} </p>
                        <p className={styles.price}>{item.price_selling.toLocaleString('vi-VN')} VND</p>
                    </div>
                </div>
            ))
            }
        </>
    )
}
export default CartItem;