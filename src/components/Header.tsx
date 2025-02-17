
const LuxeretNav = () => {
  return (
<div data-animation="default" data-collapse="none" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar nav">
    <div className="navbar-container container">
        <div className="navbar-content">
            <a href="https://luxeret.com" aria-current="page" className="home-link nav-brand current">
                <img src="/assets/image/main-logo.png" loading="lazy" alt="룩세렛 메인로고" className="navbar-logo-image"/>
            </a>
            <div className="navbar-main">
                <div className="navbar-middle">
                    <a href="htttps://luxeret.com/about" data-luxeret="navbar-luxeret" aria-current="page" className="navbar-link inline-block current">
                        <div className="nav-link-text">회사소개</div>
                        <div className="nav-link-text">회사소개</div>
                    </a>
                    <a href="https://luxeret.com/project" data-luxeret="navbar-luxeret" className="navbar-link inline-block">
                        <div className="nav-link-text">프로젝트</div>
                        <div className="nav-link-text">프로젝트</div>
                    </a>
                    <a href="https://luxeret.com/news" data-luxeret="navbar-luxeret" className="navbar-link inline-block">
                        <div className="nav-link-text">뉴스룸</div>
                        <div className="nav-link-text">뉴스룸</div>
                    </a>
                </div>
                <div data-luxeret="navbar-luxeret-close-open" className="navbar-close-open">
                    <div className="close-line-1"></div>
                    <div className="close-line-2"></div>
                </div>
            </div>
            <div className="navbar-action-wrapper">
                <div className="magnetic-button">
                    <a id="authButton" data-luxeret="navbar-luxeret-login" href="https://luxeret.com/login" className="button inline-block">
                        <div className="button-mask">
                            <div id="authText" className="button-text">로그인</div>
                            <div id="authTextClone" className="button-text">로그인</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="navbar-bg"></div>
        </div>
    </div>
    <div className="menu-background"></div>
</div>
  );
};

export default LuxeretNav;
 