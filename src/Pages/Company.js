import Header from "../components/Header";
import Footer from "../components/Footer";

import './Company.css';


function Company(){
    return (
        <div>
            <div className="section">
            <img src={"	https://hmgroup.com/wp-content/uploads/2020/03/cq5dam.web_.2400.720.5.jpeg"}/>
            </div>
            <p className="text">H&M 그룹은 브랜드와 비즈니스의 가족으로서 전 세계 고객이 패션과 디자인을 통해 자신을 표현하고 보다 지속<br/> 가능한 라이프스타일을 선택할 수 있도록 합니다. 우리는 고객 서비스를 제공하고 지속 가능하고 수익성 있는 성<br/>장에 중점을 둔 개발을 통해 사람과 사회 전반에 대한 가치를 창출합니다.</p>
            <div className="boxPic01">
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/01/investors-1024x576.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>H&M 재단</dt>
                        </dl>
                    </figcaption>
                </figure>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/01/market_and_expansion-1024x576.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>시장및 확장</dt>
                        </dl>
                    </figcaption>
                </figure>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/01/our_values-1024x576.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>우리의 가치</dt>
                        </dl>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Company;