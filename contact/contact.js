// EmailJS 初期化
emailjs.init("bcVwwLp_sW0HVl1wB");

const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // 名前チェック
    if (name === "") {
        result.textContent = "⚠ お名前を入力してください。";
        result.className = "error";
        return;
    }


    // メールチェック
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        result.textContent = "⚠ 正しいメールアドレスを入力してください。";
        result.className = "error";
        return;
    }


    // 内容チェック
    if (message === "") {
        result.textContent = "⚠ お問い合わせ内容を入力してください。";
        result.className = "error";
        return;
    }


    // EmailJS送信
    emailjs.send(
        "service_z6clrha",
        "template_hellnve",
        {
            name: name,
            email: email,
            message: message
        }
    )
    .then(function () {

        result.textContent = "✅ お問い合わせありがとうございます。送信しました。";
        result.className = "success";

        form.reset();

    })
    .catch(function (error) {

        console.log(error);

        result.textContent = "❌ 送信に失敗しました。";
        result.className = "error";

    });

});