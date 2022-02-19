import catsGaloreImg from "../images/CutieCatAnimation.gif"
import ProjectCard from "./ProjectCards";

function CatsGalore() {

    const img = catsGaloreImg
    const text = "cat"
    const list = "Made with: HTML, CSS, JavaScript"
    const link = "https://catsgalore.netlify.app/"
    const title = "Cats Galore"

    return <ProjectCard img={img} title={title} text={text} list={list} link={link} /> 

}

export default CatsGalore;