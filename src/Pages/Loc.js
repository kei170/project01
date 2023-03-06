import { AiFillAlert } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import './Loc.css';

function Loc(){
    return (
        <div>
            <div className="boxLoc">
            <img src={"https://shareditassets.s3.ap-northeast-2.amazonaws.com/production/uploads/post/featured_image/936/%EB%A7%9B%EC%A7%91.JPG"}/>
            <label htmlFor="search"><BsSearch />매장찾기</label>
            <input type='text' id='search'
                    name='search' required placeholder="매장찾기"     size='10'></input>
            <p>10km 내 0개의 스토어</p>
            </div>
            <div>
                <p><AiFillAlert />매장에 따라 표시된 결과와 실 재고 상황이 다를 수 있어, 매장에서의 실 재고는 보장되지 않습니다. 온라인과 오프라인 매장의 제품 가격에 차이가 있을 수 있습니다.</p>
            </div>
        </div>
    )
}

export default Loc;