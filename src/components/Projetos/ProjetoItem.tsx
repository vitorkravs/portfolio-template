import Link from 'next/dist/client/link'
import {AiOutlineRightCircle} from 'react-icons/ai'
import {ProjetoContainer} from './styles' 

interface ProjetoProps{
    title: string;
    description: string;
    slug:string;
    img: string;
}

export default function ProjetoItem({title, description, slug, img}: ProjetoProps){
    return(
        <ProjetoContainer imgUrl={img}>
            <section>
                <div className='overlay'/>
                <div className='text'>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                </div>
            </section>
            <button type='button'>
                <Link href={slug}>
                    <a>
                        Ver mais <AiOutlineRightCircle/>
                    </a>
                </Link>
            </button>
        </ProjetoContainer>
    )
}