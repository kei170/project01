import { Link } from 'react-router-dom';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

import './Footer.css';


function Footer(){
    return (
        <footer>
            <div className='boxInfo'>
                <ul>
                    <li>법인명 : 에이치앤엠헤네스앤모리츠 주식회사</li>
                    <li>통신판매업신고번호 : 2022-서울강남-01184</li>
                    <li>사업자등록번호 : 220-87-83339 </li>
                    <li>대표자 : 아담칼슨,아네타포쿠친스카</li>
                    <li>서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182</li>
                    <li>대표번호 080-822-0220</li>
                    <li>info.kr@hm.com</li>
                </ul>
            </div>
            <div className='boxServe'>
                <ul>
                <li>
                    <Link to="https://www.facebook.com/hm"><FaFacebookSquare /></Link></li>
                <li>
                    <Link to="https://twitter.com/hmsouthkorea"><BsTwitter /></Link></li>
                <li>
                    <Link to="https://www.instagram.com/hm/"><FaInstagram /></Link></li>
                <li>
                    <Link to="https://www.youtube.com/user/hennesandmauritz"><FaYoutube /></Link></li>
                <li>
                    <Link to="https://m.post.naver.com/my.nhn?memberNo=20048415"><SiNaver /></Link></li>
                <li>
                    <Link to="https://pf.kakao.com/_mmfQZ"><RiKakaoTalkFill /></Link></li>
                </ul>    
            </div>
            <div className='boxCopy'>
                <small>Copyright&copy;H&M 2023
                </small>
            </div>
        </footer>
    )
}

export default Footer;