import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(props) {

    return <nav className="nav">
        <Link to="/" className="site-title">
            Cabelereira leila
        </Link>
        <ul>
            <CustomLink to="/register">Cadastre-se!</CustomLink>
            {props.userId && <CustomLink to="/schedule">Agendar</CustomLink>}
            {!props.userId && <CustomLink to="/login">Login</CustomLink>}
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={ isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}