import Link from "next/link"
import {useRouter} from 'next/router';


const Navbar = () => {

    const router = useRouter();

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
                <Link id="titleHome" href="/" onClick={toprm} >
                    <h3 className={router.pathname == "/" ? "active" : ""}>v0idx</h3>
                </Link>
                {" "}
                <h3>&raquo;</h3>
                {" "}
                <Link id="titleWords" href="/words">
                    <h3 className={router.pathname == "/words" ? "active" : ""}>words</h3>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;