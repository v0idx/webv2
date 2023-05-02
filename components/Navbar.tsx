import Link from "next/link"

const Navbar = () => {
    function toprm() {
        if (typeof window !== 'undefined') {
            let mbtn = document.getElementById("myBtn");
            if (mbtn) {
                mbtn.style.display = "none";
            }
        }
    }
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="#" onClick={toprm}>
                    v0idx
                </Link>
            </div>
        </div>
    )
}

export default Navbar;