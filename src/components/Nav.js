import globeLogo from "./../images/globe.png"

export default function Nav() {
    return (
        <nav className="Title-bar">
            <img src={globeLogo} alt="globe logo"/>
            <h3>My Travel Joural</h3>
        </nav>
    )
}