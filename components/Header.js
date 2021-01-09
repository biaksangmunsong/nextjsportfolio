import Link from "next/link"
import { useRouter } from "next/router"
import HeaderDiv from "../styles/styled-components/partials/HeaderDiv"

const Header = () => {

    const router = useRouter()

    return (
        <HeaderDiv>
            <div className="sub__container">
                <a href="/" className="__title">Next<span>Js</span></a>
                <nav>
                    <Link href="/">
                        <a className={ router.pathname === "/" ? "active" : "" }>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={ router.pathname === "/about" ? "active" : "" }>About</a>
                    </Link>
                </nav>
            </div>
        </HeaderDiv>
    )

}

export default Header