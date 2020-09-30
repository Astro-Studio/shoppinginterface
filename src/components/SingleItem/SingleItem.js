import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

import { motion } from "framer-motion";

const SingleItem = ({ current, addToCart }) => {
  return (
    <motion.div
      className={styles.container}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className={styles.singleItem}>
        <img
          className={styles.singleItem__image}
          src={current.image}
          alt={current.title}
        />
        <div className={styles.singleItem__details}>
          <p className={styles.details__title}>{current.title}</p>
          <p className={styles.details__description}>{current.description}</p>
          <p className={styles.details__price}>$ {current.price}.00</p>

          <button
            onClick={() => addToCart(current.id)}
            className={styles.details__addBtn}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
