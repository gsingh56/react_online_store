import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  addToCart,
  fetchProduct,
  removeSelectedProduct
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "" && token) {
      dispatch(fetchProduct(productId, token));
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
                  {image && (
                    <img
                      className="ui fluid image"
                      src={require("../images/" + image).default}
                      alt={title}
                    />
                  )}
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <div className="ui teal tag label">$ {price.toFixed(2)}</div>
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
            <div class="ui primary animated button huge" tabIndex="0">
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
