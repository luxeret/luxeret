// 주요일정과 프로젝트 데이터를 로컬 스토리지에서 가져오고 보낼 때마다 로컬 스토리지에 저장합니다.
const scheduleForm = document.getElementById('scheduleForm');
const projectForm = document.getElementById('projectForm');
const itemsList = document.getElementById('itemsList');
const pagination = document.getElementById('pagination');

let currentPage = 1;
const itemsPerPage = 5;

function updateItemsList() {
    const storedItems = JSON.parse(localStorage.getItem('sentItems')) || [];
    const itemsToDisplay = storedItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    itemsList.innerHTML = '';
    itemsToDisplay.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('sent-item');
        itemElement.textContent = item;
        itemsList.appendChild(itemElement);
    });

    updatePagination(storedItems.length);
}

function updatePagination(totalItems) {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => {
            currentPage = i;
            updateItemsList();
        });
        pagination.appendChild(pageButton);
    }
}

function sendWebhookMessage(type, data) {
    const webhookUrl = 'https://discord.com/api/webhooks/1329304753544364122/9-VM3OoNQHLDlbi2ZLtZnGYm751JaLAFwyqEX87u_Am_SkELoJ_H6pBWYMcHyTZEBYcD';

    const embedData = {
        content: `**${type}**`,
        embeds: [
            {
                title: `${type} 정보`,
                fields: [
                    { name: "제목", value: data.title, inline: true },
                    { name: "상세 내용", value: data.description, inline: true },
                    { name: "날짜/상태", value: type === '주요일정' ? data.date : data.status, inline: true }
                ]
            }
        ]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(embedData)
    })
    .then(() => {
        alert(`${type}이 디스코드로 전송되었습니다!`);

        // 로컬 스토리지에 저장
        const storedItems = JSON.parse(localStorage.getItem('sentItems')) || [];
        storedItems.push(`${type} 전송됨: ${data.title}`);
        localStorage.setItem('sentItems', JSON.stringify(storedItems));

        updateItemsList(); // 전송 후 리스트 업데이트
    })
    .catch(error => {
        console.error(`${type} 전송 실패:`, error);
        alert('전송에 실패했습니다.');
    });
}

// 주요일정 전송 처리
scheduleForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('scheduleTitle').value;
    const date = document.getElementById('scheduleDate').value;
    const description = document.getElementById('scheduleDescription').value;

    const scheduleData = { title, date, description };
    sendWebhookMessage('주요일정', scheduleData);
    scheduleForm.reset(); // 폼 초기화
});

// 프로젝트 전송 처리
projectForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('projectTitle').value;
    const status = document.getElementById('projectStatus').value;
    const description = document.getElementById('projectDescription').value;

    const projectData = { title, status, description };
    sendWebhookMessage('프로젝트', projectData);
    projectForm.reset(); // 폼 초기화
});

// 페이지 로드 시 로컬 스토리지에서 보낸 항목들 가져오기
updateItemsList();



