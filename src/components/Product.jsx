import React, { Component } from 'react';  
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class Product extends Component {
    render() {

        const {id, title, img, price, inCart} = this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto col-md-4 col-lg-3 my-3">
                <div className="cart bg-white">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" 
                                 onClick={() =>
                                    //  console.log('you click me on the image container')
                                    value.handleDetail(id)
                                }
                            >
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top" />
                            </Link>
                            <button 
                                className="cart-btn"
                                disabled={inCart ? true :  false} 
                                onClick={() => {
                                    // console.log("added to the cart");
                                    value.addToCart(id);  
                                    value.openModal(id);
                                }}
                            >
                                {inCart ? (
                                    <p className="text-capitalize mb-0" disabled>
                                        {" "}
                                        in cart
                                    </p>
                                ) : (
                                    <i className="fas fa-cart-plus" />
                                )}
                            </button>
                        </div>
                        )}
                    </ProductConsumer>
                    {/* cart footer */}
                    <div className="cart-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0 ml-2 mt-3 mb-2">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0 mr-2 mt-3 mb-2">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div> 
            </ProductWrapper>
        );
    }
}

export default Product;

Product.PropTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div `
    ${'' /* border:1px solid gray; */}
    .cart{
        border-color:transparent;
        transition: all 1s linear;
    }
    .cart-footer {
        background: transparent;
        border-top: transparent;
        transition:all 1s linear;
    }
    &:hover{
        .cart{
            border:2px solid rgba(0,0,0,0.2);
            box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .cart-footer {
            background: rgba(247, 247, 247);
        }
    }
    .img-container {
        position:relative;
        overflow: hidden;
    }
    .cart-img-top {
        transition: all 1s linear; 
    }
    .img-container:hover .cart-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right:0;
        padding:0.2rem 0.4rem;
        background:var(--lightBlue);
        border:none; 
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform:translate(100%, 100%);
        transition:all 1s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }
    .cart-btn:hover {
      color: var(--mainBlue);
      cursor: pointer;    
    }
`; 