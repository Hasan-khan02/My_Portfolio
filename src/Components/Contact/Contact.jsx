import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail.png'
import location_icon from '../../assets/location.png'
import call_icon from '../../assets/call.png'
const Contact = () => {
  const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5dd2640f-a513-4b1c-92c9-d7da3a7435ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <dic className="contact-title">
        <h1>Get in touch</h1>
        <img src="" alt="" />
      </dic>
      <div className="contact-section">
        <div className="contact-left">
            <h1> Let's talk</h1>
            <p>I’m currently open to new opportunities and collaborations. If you have a project in mind or need help with web development, feel free to reach out. I’d love to hear from you and see how I can bring value to your ideas.

</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>hasanjavedk@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+923062190790</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Khi, Pakistan</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter your Name' name='name'/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter your Email' name='email'/>
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="8" placeholder='Enter your message !'></textarea>
            <button type='submit' className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
