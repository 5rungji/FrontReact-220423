import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div id="footer">
      <div className="footer_in">
        <h1>주식회사 마크</h1>
        <p>
          Tel. 055-263-4001 | Fax. 055-275-6375 <br />
          디자인팀 mark2634001@naver.com <br />
          마케팅팀 mark4001@naver.com <br />
          Changwon, Korea ㅣ Biz License 830-88-00578
        </p>
        <hr className="hide" />
      </div>
    </div>
  );
}

export default Footer;
