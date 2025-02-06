import emailjs from "@emailjs/browser";

const sendEmail = () => {
  emailjs.send(
    "service_3hxa8vz",
    "your_template_id",
    {
      to_email: "receiver@example.com",
      message: "React에서 보낸 이메일!",
    },
    "service_3hxa8vz"
  );
};
