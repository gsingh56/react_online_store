import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const onClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div
                    className="ui vertical animated button"
                    tabIndex="0"
                    onClick={onClick}
                  >
                    <div className="hidden content">
                      <i className="cart plus icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to={"/cart"}>
            <div class="ui primary animated button huge" tabindex="0">
              <div class="visible content">Go To Cart</div>
              <div class="hidden content">
                <i class="shop icon"></i>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
