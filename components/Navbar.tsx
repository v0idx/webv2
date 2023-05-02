import Link from "next/link"

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="#">
                    v0idx
                </Link>
            </div>
        </div>
    )
}

export default Navbar;