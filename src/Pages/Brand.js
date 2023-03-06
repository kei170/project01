import { Link } from "react-router-dom";

import './Brand.css';

function Brand(){
    return (
        <div className='box-list'>
            {/*  */}
            <figure>
                <img src={"https://hmgroup.com/wp-content/uploads/2022/01/hm-1024x576.jpg"}/>
                <figcaption>
                    <dl>
                        <dt><Link to="https://hmgroup.com/brands/hm/">H&M</Link></dt>
                    </dl>
                </figcaption>
            </figure>
            {/*  */}
            <figure>
                <img src={"https://hmgroup.com/wp-content/uploads/2022/08/COS-brand-hero-1024x576.jpg"}/>
                <figcaption>
                    <dl>
                        <dt><Link to="https://hmgroup.com/brands/cos/">COS</Link></dt>
                    </dl>
                </figcaption>
            </figure>
            {/*  */}
            <figure>
                <img src={"https://hmgroup.com/wp-content/uploads/2020/05/Weekday-brand-hero-1024x576.jpg"}/>
                <figcaption>
                    <dl>
                        <dt><Link to="https://hmgroup.com/brands/weekday/">WEEKDAY</Link></dt>
                    </dl>
                </figcaption>
            </figure>
            {/*  */}
            <figure>
                <img src={"https://hmgroup.com/wp-content/uploads/2022/01/hm_home-1024x576.jpg"}/>
                <figcaption>
                    <dl>
                        <dt><Link to="https://hmgroup.com/brands/hm-home/">H&M HOME</Link></dt>
                    </dl>
                </figcaption>
            </figure>
        </div>
    )
}

export default Brand;