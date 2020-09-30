import React from "react";
import styles from "./Products.module.css";

import { motion } from "framer-motion";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <motion.div
      className={styles.products}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
