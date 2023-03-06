import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import './Pos.css';

function Pos(){
    return (
        <div>
            <div>
                <figure className="boxPic01">
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/01/sustainability.jpg"}/>
                </figure>
                <p className="text01">Helena Helmersson 과 Jesper Brodin:
                    지속 가능성에 대해 이야기하기</p>
            </div>
            <img />
            <p className="text02">소매 산업의 미래를 보장하고 '지속 가능한 제품이 은행을 망칠 것'이라는 신화를 깨뜨리려면 어떻게 해야 할까요?<br/> 전에도 말했듯이 다른 사람의 말을 듣고 협력하는 것이 진정한 변화를 일으키는 열쇠입니다.<br/>
            10월 말, H&M Group의 CEO인 Helena Helmersson과 Ingka Group / IKEA의 CEO인 Jesper Brodin은 여러 디지털<br/> 회의를 거쳐 마침내 IRL을 만날 기회를 가졌습니다.<br/>
            <Link to="https://www.youtube.com/watch?v=iW0KW5I_q4k&t=3s">솔직하고 재미있고 명료한 대화를 위해 영상을 시청하세요.</Link>
            </p>
        </div>
    )
}

export default Pos;