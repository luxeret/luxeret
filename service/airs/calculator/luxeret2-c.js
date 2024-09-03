let calculateButtonClicked = false;

function calculate() {
    const numUsers = document.getElementById('num-users').value;
    const duration = document.getElementById('duration').value;

    // 기본 요금 설정
    const baseRatePerUserPerMonth = 10000; // 사용자당 월 요금 (예: 10,000원)

    // 총 요금 계산
    const totalCost = numUsers * baseRatePerUserPerMonth * duration;

    // 결과 표시
    document.getElementById('total-cost').innerText = totalCost.toLocaleString();

    // 버튼 텍스트 변경
    const button = document.getElementById('calculate-button');
    button.innerText = '계산 다시하기';
    calculateButtonClicked = true;
    document.getElementById('email-field').style.display = 'block'; // 이메일 입력 필드 표시
}

function inquire() {
    if (calculateButtonClicked) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const numUsers = document.getElementById('num-users').value;
        const duration = document.getElementById('duration').value;

        if (email && name) {
            const emailBody = `
                안녕하세요,\n\n
                에어스쉴드 엔터프라이즈 요금제 문의드립니다.\n\n
                - 성함: ${name}\n
                - 사용자 수: ${numUsers}명\n
                - 사용 기간: ${duration}개월\n
                - 총 요금: ${document.getElementById('total-cost').innerText}원\n
                - 회신받을 이메일 주소: ${email}\n\n
                감사합니다.\n
                
                에어스쉴드-이제 보안도 구독으로 가볍게
            `;
            window.location.href = `mailto:cs@luxeret.com?subject=요금제 문의&body=${encodeURIComponent(emailBody)}`;
        } else {
            alert('이름과 이메일 주소를 모두 입력해 주세요.');
        }
    } else {
        alert('먼저 요금을 계산해 주세요.');
    }
}



function resetForm() {
    document.getElementById('calculator-form').reset();
    document.getElementById('total-cost').innerText = '0';
    document.getElementById('calculate-button').innerText = '계산하기';
    document.getElementById('email-field').style.display = 'none'; // 이메일 입력 필드 숨김
    calculateButtonClicked = false;
}