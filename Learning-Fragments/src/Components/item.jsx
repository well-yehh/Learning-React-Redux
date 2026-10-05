import styles from "./item.module.css";

const Item = ({foodItems}) =>{
    return (
         <li className= {`${styles.it_item}`}> 
          <span className={styles.item_span}> {foodItems}</span>
        </li>
    )

}
export default Item;