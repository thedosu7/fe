import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nb">
    <div className="navContain">
        <span className="lg">DosBooking</span>
        <div className="navItem">
            <button className="navBtn">Sign In</button>
            <button className="navBtn">Sign Up</button>
        </div>
    </div>
</div>
  )
}

export default Navbar