import "./contact.css"

const Contact = () => {
  return (
    <div className="contact">
        <h1 className="contact">Contact us</h1>
        <span className="contactDes">Best deals everyday</span>
        <div className="contactInput">
          <input type="text" placeholder="Your email" />
          <button>Contact to us</button>
        </div>
    </div>
  )
}

export default Contact