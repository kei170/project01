import productList from '../productList.json';
import { addToCart, removeFromCart} from "../redux/CartSlice"
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import "./Content.css";
function Content(){ 
    const {cartProductIds} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
        <div className="boxPic">
            <img src={"https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/h-m-magazine-2022/august_2022/2006/2006-1-Magazine-Article-Top-image-1688x1126-jpg.jpg]&scale=size[1024]&sink=format[jpeg],quality[80]"}/>
        </div>
            <div>
            <h2>신상품</h2>
            <ul className="info">
                <li>여성</li>
                <li>남성</li>
                <li>아동</li>
                <li>H&M HOME</li>
                <li>스포츠</li>
            </ul>
            <div className="boxCart">
                {productList.products.map((products,item)=>{
                    return (
                        <figure key={item}>
                            <img src={products.imgeUrl} alt={products.title}/>
                            <figcaption>
                                <dl>
                                    <dt>{products.title}</dt>
                                    <dd>{products.price}</dd>
                                    <dd>
                                        { !cartProductIds.includes(products.id) &&
                                        (<button type='button'
                                        onClick={
                                            () => {dispatch(addToCart(products.id))}
                                        }>추가</button>)}
                                        {cartProductIds.includes(products.id) &&
                                        (<button type='button'
                                        onClick={
                                            () => {dispatch(removeFromCart(products.id))}
                                        }>삭제</button>)}
                                    </dd>    
                                </dl>
                            </figcaption>
                        </figure>
                    )  
                })}              
            </div>
        </div>

        <div>
            <h3>MAGAZINE</h3>
            <p>A WORLD OF INSPIRATION</p>
            <p><Link to="https://www2.hm.com/ko_kr/life.html">READ H&M MAGAZINE</Link></p>
            <div className='boxMagazine'>
                <figure>
                    <img src={"https://image.hm.com/content/dam/hm-magazine-2023/january_2023/2017-studio-ss23/2017-3x2-M-TOP-1688x1126.jpg?imwidth=384"}/>
                    <figcaption>
                        <dl>
                            <dt>INSIDE HM</dt>
                            <dd>H&M Studio 2023년 S/S</dd>
                        </dl>
                        <p><Link to="https://www2.hm.com/ko_kr/life/culture/inside-h-m/hm-studio-ss23.html">Read The Story</Link></p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={"https://image.hm.com/content/dam/hm-magazine-2023/january_2023/magazine-empower-collection-2023/Magazine-empower-collection-1.jpg?imwidth=384"}/>
                    <figcaption>
                        <dl>
                            <dt>INSIDE HM</dt>
                            <dd>H&M Studio 2023년 S/S</dd>
                        </dl>
                        <p><Link to="https://www2.hm.com/ko_kr/life/culture/inside-h-m/move-empower-collection-launch.html">Read The Story</Link></p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={"https://image.hm.com/content/dam/hm-magazine-2023/january_2023/magazine-lou-2023/Magazine-1-Lou.jpg?imwidth=384"}/>
                    <figcaption>
                        <dl>
                            <dt>INSIDE HM</dt>
                            <dd>H&M Studio 2023년 S/S</dd>
                        </dl>
                        <p><Link to="https://www2.hm.com/ko_kr/life/culture/inside-h-m/nadia-nadim-joins-zlatan-hm-move.html">Read The Story</Link></p>
                    </figcaption>
                </figure>
            </div>
        </div>
        </div>
    )
}


export default Content;