import Navbar from  './Navbar'
import Footer from './Footer'
import Hero from  './Hero'

type LayoutProps = {
    children: React.ReactNode,
};

const Layout = ({ children }:LayoutProps) => {
    return(
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}
export default Layout;