import Contact from "../../../Shared/Contact";


const Layout = ({children})=>{

    return (
        <section>
            {children}
            <Contact/>
        </section>
    )
}

export default Layout;