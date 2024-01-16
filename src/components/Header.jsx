import worldIcon from "../assets/world-icon.svg";
export default function Header() {
    return (
        <header className="header">
            <div className="flex-container">
                <img src={worldIcon} alt="world" className="world-icon" />
                <div>my travel journal.</div>
            </div>
        </header>
    );
}
