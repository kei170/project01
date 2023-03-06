import productList from '../productList.json';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart,  clearAllItem } from '../redux/CartSlice';
import { BiCart } from "react-icons/bi";

import './Cart.css';
// import Header from "../components/Header";
// import Footer from "../components/Footer";

function Cart(){
    const {cartProductIds} = useSelector(state => state.cart);
    const cartProductData = productList.products.filter((products)=>
    cartProductIds.includes(products.id));

    console.log(cartProductData)
    const dispatch = useDispatch();
     
    return (
        <div>
            <h3>장바구니</h3>
            <div className="boxCart">
                {cartProductData.map((products)=>{
                    return (
                        <figure key={products.id}>
                            <img src={products.imgeUrl} alt={products.title}/>
                                <figcaption>
                                    <dl>
                                        <dt>{products.title}</dt>
                                        <dd>{products.price}</dd>
                                        <dd>
                                            <button type='button'
                                            onClick ={() => dispatch(removeFromCart(products.item))}>삭제</button>
                                        </dd>
                                    </dl>
                                </figcaption>
                        </figure>
                    )
                })}
                
            </div>
            <div className='cartEmpty'>
                <p>
                    <button
                    type='button'
                    onClick={() =>dispatch(clearAllItem())}>비우기</button>
                </p>
            {cartProductData.length < 1 && (<div>
                <BiCart />
                <p>장바구니가 비었습니다.<br/>
                카트에 항목을 추가하지 않았습니다.</p>
            </div>)}
            </div>
            {/*  */}
        </div>
    )
}

export default Cart;