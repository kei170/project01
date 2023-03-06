import { Link } from "react-router-dom";

import './Joinus.css';

function Joinus(){
    return (
        <div>
            <div className='section'>
            <h1>우리와 함께</h1>
            <img  src={"https://hmgroup.com/wp-content/uploads/2022/01/join_us.jpg"}/>
            </div>
            
            <div className='boxCart'>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/01/careers-1024x576.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt><Link to="https://hmgroup.com/career/find-your-career-with-us/">채용</Link></dt>
                        </dl>
                    </figcaption>
                </figure>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/01/join_us.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt><Link to="https://hmgroup.com/career/a-welcoming-workplace/">환영하는 직장</Link></dt>
                        </dl>
                    </figcaption>
                </figure>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/01/our_values-1024x576.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt><Link to="https://hmgroup.com/about-us/our-values/">우리의 가치</Link></dt>
                        </dl>
                    </figcaption>
                </figure>
                {/*  */}
                <figure>
                    <img src={"https://hmgroup.com/wp-content/uploads/2022/01/our_culture-1024x576.jpg"}/>
                    <figcaption>
                        <dl>
                            <dt><Link to="https://hmgroup.com/career/enjoy-our-culture/">우리 문화</Link></dt>
                        </dl>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Joinus;