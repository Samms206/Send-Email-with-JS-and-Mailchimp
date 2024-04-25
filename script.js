

const form = document.getElementById("emailForm");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
    
    const bodyMessage=`Full Name: ${fullName.value}\nEmail: ${email.value}\nMessage: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sh2069936@gmail.com",
        Password: "649029A6A7FD2C56F725C4CAE43506F09A29",
        To: `${email.value}`,
        From: "sh2069936@gmail.com",
        Subject: "Thank you for your Subscription!",
        Body: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f2f2f2;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center; padding: 20px;">
                    <h1 style="color: #333;">Thank you for your Subscription!</h1>
                </div>
                <div style="padding: 20px;">
                    <p>Hi, ${fullName.value}!</p>
                    <p>Thank you for subscribing to our service. We appreciate your interest.</p>
                    <p>If you have any questions or need assistance, feel free to contact us.</p>
                </div>
                <div style="text-align: center; margin-top: 20px; padding: 20px;">
                    <p>Best regards,<br> Your Company Name</p>
                </div>
            </div>
        </div>
    ` 
    }).then(
        message => alert(message)
    )
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    Swal.fire({
        title: "Your email has been sent!",
        text: "Thank you for your subscription!",
        icon: "success"
      });
})