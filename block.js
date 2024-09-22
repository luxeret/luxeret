var blocklist = ["211.38.80.26"];

$.ajax({
    "url" : "https://api.ip.pe.kr/json",
    "method" : "GET"
}).done(function(data) {
    if (blocklist.includes(data.ip)) {
        block();
    }
});

function block() {
    document.getElementsByClassName('ip2024')[0].innerHTML = "";
    
    var errmsg = document.createElement("div");
    document.body.style.margin = "0";
    errmsg.style.width = "100vw";
    errmsg.style.height = "100vh";
    errmsg.style.backgroundColor = "rgb(255, 250, 250)";
    errmsg.style.position = "absolute";
    errmsg.style.left = "0";
    errmsg.style.top = "0";
    
    var title = document.createElement('h1');
    title.textContent = "죄송합니다.";
    title.style.position = "absolute";
    title.style.left = "50%";
    title.style.top = "30%";
    title.style.transform = "translate(-50%, -50%)";

    var context = document.createElement('p');
    context.innerHTML = "회원님께서 접속한 IP는 차단된 IP로 <br>우측 채널톡을 이용해 문의부탁드립니다.";
    context.style.textAlign = "center";
    context.style.position = "absolute";
    context.style.left = "50%";
    context.style.top = "50%";
    context.style.transform = "translate(-50%, -50%)";

    errmsg.appendChild(title);
    errmsg.appendChild(context);

    document.body.appendChild(errmsg);
}