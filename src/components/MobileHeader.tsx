import React from 'react';

const MobileHeader: React.FC = () => {
  return (
<header className="mobile-header">
<a href="https://luxeret.com">
    <img src="https://ifh.cc/g/Zt0p99.png" alt="로고"/>
</a>
<div id="Person-Icon">
    <a href="https://luxeret.com/myaccount">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>
        </svg>
    </a>
</div>
</header>

  );
};

export default MobileHeader;
