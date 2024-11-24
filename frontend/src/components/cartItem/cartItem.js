import React from "react"
import styles from "./cartItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons';
function CartItem({ items, onRemove }) {
    return (
        <>
            {items.map((item) => (
                <div className={styles.cart_item}>
                    <img src={require(`../../img/${item.pic}`)} alt={item} className={styles['image']} />
                    <div className={styles.remove} onClick={() => onRemove(item.id)}>x</div>
                    <div className={styles.details}>
                        <h3 className={styles.name}>{item.name}</h3>

                        <p className={styles.detail}>Gender:     {item.gender}</p>
                        <p className={styles.detail}>
                            Color:   <FontAwesomeIcon icon={faSquare} style={{ color: item.color }} />
                        </p>
                        <p className={styles.detail}>Size:     {item.size}</p>
                        <p className={styles.price}>{item.price} VND</p>
                    </div>

                    <div className={styles.checkboxWrapper}>
                        <input type="checkbox" className={styles.checkbox} />
                    </div>
                </div>
            ))
            }
        </>
    )
}
export default CartItem;