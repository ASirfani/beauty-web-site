/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCurrencyPound } from "react-icons/bs";
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './index.css'

const TemplateCard = () => {
    return (
        <>
            <div class="templateCard">
                <div class="product-wrapper mb-45 text-center">
                    <div class="product-img"> <a href="#" data-abc="true">
                        <img src="https://i.imgur.com/tL7ZE46.jpg" alt="" /> </a>
                        <span class="text-center"><BsCurrencyPound /> 43,000</span>
                        <div class="product-action">
                            <div class="product-action-style">
                                <a href="#">
                                    <AiOutlinePlus />
                                </a>
                                <a href="#">
                                    <AiOutlineHeart />
                                </a>
                                <a href="#">
                                    <AiOutlineShoppingCart />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='products-details-price'>
                        <p>ENDOCARE EYE AND LIP CONTOUR 15ML</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default TemplateCard