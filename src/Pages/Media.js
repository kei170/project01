import { Link } from "react-router-dom";

import './Media.css';

function Media(){
    return (
        <div>
            <div className='wrapper'>
                <h1>미디어</h1>
                <img src={"https://hmgroup.com/wp-content/uploads/2022/01/media.jpg"}/>
            </div>

            <div className='news'>
                <h3>최근 뉴스</h3>
            </div>
            <div className='wpb_wrapper'>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2023/02/UNFCCC-roundtable-Bangladesh.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>2023년 2월 27일 / 지속 가능성</dt>
                            <dd><Link to="https://hmgroup.com/news/hm-group-driving-further-climate-action-in-bangladesh/">H&M 그룹, 방글라데시에서 더 많은 기후 행동 추진</Link></dd>
                        </dl>
                    </figcaption>    
                </figure>    
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2023/02/Looper-red-jacket-big.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>2023년 2월 15일 / 기업</dt>
                            <dd><Link to="https://hmgroup.com/news/hm-group-and-remondis-create-joint-venture-to-collect-sort-and-sell-used-and-unwanted-garments-and-textiles/">H&M Group과 Remondis는 중고 의류 및 직물을 수집, 분류</Link></dd>
                        </dl>
                    </figcaption>    
                </figure>    
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2023/02/Medium_Screen-Teaser-card-image-HM-Group-logo-1024x686.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>2023년 2월 8일 / 기업</dt>
                            <dd><Link to="https://hmgroup.com/news/emergency-relief-turkiye-and-syria/">긴급 구호 Türkiye 및 시리아</Link></dd>
                        </dl>
                    </figcaption>    
                </figure>    
            </div>
            <div className='moreNews'>
                <p><Link to="https://hmgroup.com/media/news/">더 많은 뉴스</Link></p>
            </div>

            <div className='story'>
                <h3>우리의 이야기</h3>
            </div>
            <div className='grid-item'>    
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2023/02/HM-Group-button-production-Bengaluru.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>2023년 2월 28일</dt>
                            <dd><Link to="https://hmgroup.com/our-stories/from-bottle-to-buttons-and-bling-enabling-waste-pickers-to-build-a-better-life/">병에서 단추 및 블링까지: 쓰레기 수거인이 더 나은 삶</Link></dd>
                        </dl>
                    </figcaption>
                </figure>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/12/Our-stories-thumbnail-1024x493.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>2022년 12월 15일</dt>
                            <dd><Link to="https://hmgroup.com/our-stories/youre-invited-to-the-metaverse-how-hm-group-uses-tech-innovation-for-endless-fashion-opportunities/">당신을 메타버스에 초대합니다! H&M Group이 끝없는 패션 기회를 위해 기술 혁신을 사용</Link></dd>
                        </dl>
                    </figcaption>
                </figure>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/10/Top-image-OS-1024x402.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt>2022년 10월 31일</dt>
                            <dd><Link to="https://hmgroup.com/our-stories/hm-group-cto-alan-boehme-in-podcast-interview/">팟캐스트 인터뷰에서 H&M 그룹 CTO Alan Boehme</Link></dd>
                        </dl>
                    </figcaption>
                </figure>
            </div>
            <div className="moreStory">
                <p><Link to="https://hmgroup.com/media/our-stories/">더 많은 이야기</Link></p>
            </div>
        </div>
    )
}

export default Media;