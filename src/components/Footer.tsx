import { useState } from "react";

export default function FooterInfo() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="footer">
      <div className="links">
        <a href="https://luxeret.com/email">이메일 무단 수집거부</a>
        <a href="https://luxeret.com/idea">아이디어 정책</a>
        <a href="https://luxeret.com/support/">고객센터</a>
        <a href="https://luxeret.com/policy/terms/">이용약관</a>
        <a href="https://luxeret.com/policy/privacy/">개인정보처리방침</a>
        <a href="https://luxeret.com/policy/agreement/">청소년보호정책</a>
        <a href="https://luxeret.com/bugbounty/">버그 바운티</a>

        <div className="family-site">
          <button className="family-btn" onClick={toggleDropdown}>
            패밀리 사이트 {dropdownOpen ? "▼" : "▲"}
          </button>
          {dropdownOpen && (
            <ul className="family-dropdown">
              <li>
                <a href="https://webpin.luxeret.com/" target="_blank" rel="noreferrer">
                  <strong style={{ color: "#000000" }}>웹핀📌</strong>
                </a>
              </li>
              <li>
                <a href="https://returns.luxeret.com" target="_blank" rel="noreferrer">
                  <strong style={{ color: "#000000" }}>리턴🖥️</strong>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="info">
        <span>
          <strong>룩세렛 대표이사 : 김태준</strong>
        </span>
        <span>ㅣ</span>
        <span>
          <strong>사업자등록번호 : 802-68-00634</strong>
        </span>
        <span>ㅣ</span>
        <span>
          <a
            href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8026800634"
            className="business-check"
          >
            <strong style={{ color: "#ffffff" }}>사업자 정보</strong>
          </a>
        </span>
        <span>ㅣ</span>
        <span>
          <strong>통신판매업 : 2025-인천연수구-0263</strong>
        </span>
        <br />
        <span>
          <strong>주소 : 인천타워대로 323, 송도센트로드 C동 2304-B58호</strong>
        </span>
        <span>고객상담: 0507-1375-9650</span>
      </div>

      <div className="copyright">
        Copyright © 2024-2025 LUXERET. All Rights Reserved.
      </div>
    </div>
  );
}
