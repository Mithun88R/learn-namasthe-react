import User from "./User";
import UserClass from "./UserClass";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        If you have any questions, please reach out to us at contact@swiggy.com
      </p>
      <User name="Mithun" email="mithun@example.com" location="chennai" />
      <UserClass name="Pranav" email="pranav@example.com" location="Kerala" />
    </div>
  );
};

export default ContactUs;
