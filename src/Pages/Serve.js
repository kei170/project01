import { Link } from "react-router-dom";

import './Serve.css';

function Serve(){
    return (
    <div>
        <div className="text02">
            <h1>안녕하세요, 고객서비스팀 입니다.</h1>
            <p>[H&M 고객센터 주말 운영시간 변경안내]<br/>
                안녕하세요, H&M 고객센터 입니다.<br/> 
                H&M 을 아껴주시는 고객 님께 감사드립니다.<br/> 
                2023년 3월 1일부터 H&M 고객센터의 주말(토/일) 운영시간이 오전 10시부터 오후 4시까지로 변경되었습니다.<br/> 
                고객 센터 영업 종료 후, 문의하실 내용이 있으시다면 customerservice.kr@hm.com으로 연락해 주세요. 답변이 빠르게 처리될 수 있도록 최선을 다하겠습니다</p>
        </div>
        <div>
            <h3>자주 찾는 문의</h3>
            <div className="icon-link">
                <ul>
                    <li><Link to="https://www2.hm.com/ko_kr/customer-service/shippinganddelivery.html">배송</Link></li>
                    <li><Link to="https://www2.hm.com/ko_kr/customer-service/returns.html">반품 및 환불</Link></li>
                    <li><Link to="https://www2.hm.com/ko_kr/customer-service/payments-info.html">결제</Link></li>
                    <li><Link to="https://www2.hm.com/ko_kr/customer-service/gift-card/gift-card.html">기프트 카드</Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Serve;