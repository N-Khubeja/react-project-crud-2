import { Link, Outlet } from "react-router-dom"


const Header = () => {
    return(
        <div className="header">
            <Link className="Link" to={'/create'}>CREATE</Link>
            <Link className="Link" to={'/'}>MAIN</Link>
            <Link className="Link" to={'/done'}>DONE TASKS</Link>

            <Outlet/>
        </div>
    )
}

export default Header