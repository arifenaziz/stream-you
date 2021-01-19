import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import SideMenu from "../SideMenu/SideMenu";

const Layout = ({children}) =>{
    return(
        <>
        <Header/>
        <div id="wrapper">

        <SideMenu/>

        <div id="content-wrapper">
        <div className="container-fluid pb-0">
        {children}
        </div>


        <Footer/>
        </div>

        </div>


        </>
    )
}

export default Layout;