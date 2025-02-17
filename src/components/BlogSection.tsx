import { useState, useEffect } from "react";

export default function NewsSection() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    function updateDate() {
      
      const kstDate = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })
      );
      const formattedDate = kstDate.toLocaleDateString("ko-KR");
      setCurrentDate(formattedDate);
    }

    updateDate();
    const intervalId = setInterval(updateDate, 1000 * 60 * 60 * 24);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="section-news">
      <div className="news-wrapper">
        <div className="news-title-wrapper">
          <h2 className="news-title">
            <span className="calendar-icon">📅</span>룩세렛 이야기{" "}
            <span id="current-date">{currentDate}</span>
          </h2>
          <div className="news-mobile-button-wrapper">
            <div className="magnetic-button">
              <div data-luxeret="luxeret-news" className="news-button-wrapper">
                <a
                  href="https://luxeret.com/news"
                  className="service-button blog inline-block"
                >
                  <div className="button-mask blog">
                    <div className="service-button-content blog">
                      <div className="button-text is-news">모두보기</div>
                      <img
                        src="/assets/image/right-arrow.png"
                        loading="lazy"
                        alt=""
                        className="service-button-arrow blog"
                      />
                    </div>
                    <div className="service-button-content blog">
                      <div className="button-text is-news">모두보기</div>
                      <img
                        src="/assets/image/right-arrow.png"
                        loading="lazy"
                        alt=""
                        className="service-button-arrow blog"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="news-collection-list-wrapper luxeret-dyn-list">
          <div role="list" className="news-list-grid in-home luxeret-dyn-items">
            <div role="listitem" className="news-collection-item is-home luxeret-dyn-item">
              <a
                href="https://luxeret-news.notion.site/1924acc108f080fe99bac103c56d4ef2"
                className="blog-item-card is-home inline-block"
              >
                <div className="blog-item-card-image">
                  <img
                    loading="eager"
                    src="/assets/image/blog-1.png"
                    alt=""
                    className="single-blog-image"
                  />
                  <div className="project-image-hover-text-loop">
                    <div className="project-image-loop-section">
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                    </div>
                    <div className="project-image-loop-section">
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                    </div>
                  </div>
                </div>
                <div className="blog-item-time-wrapper">
                  <div className="blog-card-read-time">이벤트</div>
                </div>
                <div className="blog-item-card-text-wrapper">
                  <div className="blog-card-title">💡아이디어톤 개최 안내</div>
                  <div className="blog-item-card-summary">📅 2025-02-07</div>
                </div>
              </a>
            </div>
            <div role="listitem" className="news-collection-item is-home luxeret-dyn-item">
              <a
                href="https://luxeret-news.notion.site/1884acc108f0806fb3b0c4d09b18d7ca"
                className="blog-item-card is-home inline-block"
              >
                <div className="blog-item-card-image">
                  <img
                    loading="eager"
                    src="/assets/image/blog-2.png"
                    alt=""
                    className="single-blog-image"
                  />
                  <div className="project-image-hover-text-loop">
                    <div className="project-image-loop-section">
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                    </div>
                    <div className="project-image-loop-section">
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                    </div>
                  </div>
                </div>
                <div className="blog-item-time-wrapper">
                  <div className="blog-card-read-time">공지사항</div>
                </div>
                <div className="blog-item-card-text-wrapper">
                  <div className="blog-card-title">🔐개인정보처리방침 변경 안내</div>
                  <div className="blog-item-card-summary">📅 2025-01-23</div>
                </div>
              </a>
            </div>
            <div role="listitem" className="news-collection-item is-home luxeret-dyn-item">
              <a
                href="https://luxeret-news.notion.site/1884acc108f08049bbf0e30dd23cd70d"
                className="blog-item-card is-home inline-block"
              >
                <div className="blog-item-card-image">
                  <img
                    loading="eager"
                    src="/assets/image/blog-3.png"
                    alt=""
                    className="single-blog-image"
                  />
                  <div className="project-image-hover-text-loop">
                    <div className="project-image-loop-section">
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                    </div>
                    <div className="project-image-loop-section">
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                      <div className="project-image-loop-heading">자세히</div>
                      <div className="project-image-loop-heading">보기</div>
                    </div>
                  </div>
                </div>
                <div className="blog-item-time-wrapper">
                  <div className="blog-card-read-time">공지사항</div>
                </div>
                <div className="blog-item-card-text-wrapper">
                  <div className="blog-card-title">📊계정 패널 출시</div>
                  <div className="blog-item-card-summary">📅 2025-01-22</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
