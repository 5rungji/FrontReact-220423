import React from 'react';
import './q_mn.css';
import { FaAngleUp, FaMapMarkerAlt, FaYoutube, FaInstagram, FaCommentDots } from 'react-icons/fa';

function QMn() {
  return (
    <div id="q_mn">
      <div className="q_mn">
        <ul class="nav">
          <li>
            <a href="#">
              <FaAngleUp className="icon" />
              Top</a>
          </li>
          <li>
            <a href="http://naver.me/F5bsCXu0" target="_blank">
              <FaMapMarkerAlt className="icon" />
              Store
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mark111_official" target="_blank">
              <FaInstagram className="icon" />
              Instargram
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCLLFtAJedVWsNYfK-yjX4Zg" target="_blank">
              <FaYoutube className="icon" />
              Youtube
            </a>
          </li>
          <li>
            <a href="http://pf.kakao.com/_JxoeWK" target="_blank">
              <FaCommentDots className="icon" />
              KakaoTalk
            </a>
          </li>
        </ul>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default QMn;
