import productList from '../productList.json';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/CartSlice';

import { Link } from "react-router-dom";

import './Man.css';

function Man(){
    const dispatch = useDispatch();
    const {cartProductIds} = useSelector(state => state.cart);

    return (
        <div className='boxPic01'>
            <img src={"https://about.hm.com/content/dam/hmabout/groupsite/images/article/2022/august/3086_Editorial_Lookbook_Release_72ppi.jpg/_jcr_content/renditions/cq5dam.web.976.603.jpeg"}/>
            <h3>Weekly Best seller</h3>
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
                                            () => {dispatch(addToCart(products.id))}}>추가</button>)}
                                        {cartProductIds.includes(products.id) &&
                                        (<button type='button'
                                        onClick={
                                            () => {dispatch(removeFromCart(products.id))}}>삭제</button>)}
                                    </dd>    
                                </dl>
                            </figcaption>
                        </figure>
                    )
                })}
            
            </div>
            <h3 className='coth'>남자옷</h3>
            <p className='text'>H&M의 남성복 컬렉션에서 필요한 모든 최신 스타일을 살펴보세요. 상의와 티셔츠, 편안한 라운지 세트와 속옷을 포함한 일상의 필수 아이템을 모두 만나보실 수 있습니다. 곧 차려입어야 하는 행사가 있나요? H&M의 남자 자켓과 정장을 살펴보고 드레스 코드를 맞추고 세련된 스타일도 연출해 보세요. <Link to="https://www2.hm.com/content/hmonline/ko_kr/men/shop-by-product/trousers.html">남자 바지</Link>라면 다양한 기본 색상의 치노, 조거, 카고 스타일이 준비되어 있습니다. 청바지를 찾고 있나요? H&M <Link to="https://www2.hm.com/content/hmonline/ko_kr/men/shop-by-product/jeans.html">남자 청바지</Link>는 스키니, 스트레이트, 테이퍼드를 비롯하여 스타일에 맞는 다양한 핏을 선보입니다. 세련된 오버사이즈 셔츠 또는 클래식한 데님을 H&M의 남자 셔츠와 함께 매치해 보세요. 추운 날씨도 H&M 남자 자켓과 코트라면 문제없습니다. 패딩 자켓과 트렌치 코트를 비롯하여 일 년 내내 어울리는 색상의 가죽 자켓과 바머 자켓이 준비되어 있습니다.  
            </p>
        </div>
    )
}

export default Man;