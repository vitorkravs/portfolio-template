
import { NavLinkContainer } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props{
    title: string,
    path: string
    includes?: boolean;
}

export default function NavLink({title, path, includes=false}: Props) {
    const router = useRouter()

    function verifyIfIsActive() {
        if(includes){
            return router.pathname.includes(path)
        }
        return path == router.pathname
    }

    const isActive = verifyIfIsActive();
    console.log(router.pathname)
    return(
        <NavLinkContainer isActive={isActive}>
            <Link href={path}>
                <a>{title}</a>
            </Link>
        </NavLinkContainer>
    );
}
