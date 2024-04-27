const form = document.getElementById("emailForm");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}\nEmail: ${email.value}\nMessage: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sh2069936@gmail.com",
    Password: "649029A6A7FD2C56F725C4CAE43506F09A29",
    To: `${email.value}`,
    From: "sh2069936@gmail.com",
    Subject: "Thank you for your Subscription!",
    Body: `
        <div class="wrapper_email" style="grid-column-gap: 60px; grid-row-gap: 60px; border-radius: 24px; flex-flow: column; justify-content: center; align-items: center; width: 100%; max-width: 920px; padding: 40px; font-family: Gilroy, sans-serif; font-size: 64px; display: flex;">
            <div class="logo_bians" style="aspect-ratio: 14 / 5; background-image: url('../images/logo.svg'); background-position: 50%; background-size: cover; width: 40%; max-width: 140px;"></div>
            <div class="wrap_m" style="grid-column-gap: 20px; grid-row-gap: 20px; flex-flow: column; justify-content: center; align-items: center; width: 100%; display: flex;">
            <div class="title_email center bold" style="line-height: 76.8px; text-align: center; font-weight: 700;">Mail adresinizi doğrulayın</div>
            <div class="sub_text" style="font-size: 32px; line-height: 38.4px;">Doğrulama kodunuz:</div>
            </div>
            <div class="wrap_bg" style="background-color: #f0f1f7; border-radius: 32px; flex-flow: column; justify-content: center; align-items: center; width: 100%; padding: 40px 10px; display: flex;">
            <div class="sub_text _200px" style="font-size: 200px; line-height: 240px;">021254</div>
            </div>
            <div class="wrap_m" style="grid-column-gap: 20px; grid-row-gap: 20px; flex-flow: column; justify-content: center; align-items: center; width: 100%; display: flex;">
            <div class="sub_text _500px" style="text-align: center; max-width: 500px; line-height: 40px;">Eğer kod talep etmediyseniz, bu maili görmezden gelebilirsiniz.</div>
            </div>
            <div class="wrap_m align-left" style="grid-column-gap: 20px; grid-row-gap: 20px; justify-content: center; align-items: flex-start; width: 100%; display: flex;">
            <div class="sub_text _24px bold" style="font-size: 24px; background-image: linear-gradient(93deg, var(--red), var(--purple) 55%, var(--blue)); -webkit-text-fill-color: transparent; -webkit-background-clip: text; background-clip: text; font-weight: 700;">Uygulamamızı yüklemek için;</div>
            <div class="wrap_m horizontal" style="flex-flow: row; justify-content: flex-start; align-items: center;">
                <div class="appstore" style="aspect-ratio: 235 / 85; background-image: url('../images/App-Store-Black.svg'); background-position: 50%; background-size: cover; border-radius: 12px; width: 30%; max-width: 235px; height: auto;"></div>
                <div class="playstore" style="aspect-ratio: 235 / 85; background-image: url('../images/Google-Play-Black.svg'); background-position: 50%; background-size: cover; border-radius: 12px; width: 30%; max-width: 235px; height: auto;"></div>
            </div>
            </div>
            <div class="wrap_m" style="grid-column-gap: 20px; grid-row-gap: 20px; flex-flow: column; justify-content: center; align-items: center; width: 100%; display: flex;">
            <div class="sub_text _24px" style="font-size: 24px;">Bu ileti size, gelen iletileri kabul etmeyen bir e-posta adresi tarafından gönderilmiştir. Bu iletiye verilen hiçbir yanıt okunmayacaktır. Herhangi bir sorunuz varsa lütfen <span class="gradient-bold" style="background-image: linear-gradient(85deg, var(--red), var(--purple) 53%, var(--blue)); -webkit-text-fill-color: transparent; -webkit-background-clip: text; background-clip: text; font-weight: 700;">support@thebians.com</span> adresi üzerinden bizimle iletişime geçin.</div>
            </div>
        </div>
        `,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
  Swal.fire({
    title: "Your email has been sent!",
    text: "Thank you for your subscription!",
    icon: "success",
  });
});
