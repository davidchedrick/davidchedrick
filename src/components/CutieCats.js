import cutieCatImg from "../images/BodiCatAnimation.gif";
import ProjectCard from "./ProjectCards";

function CutieCats() {

    const img = cutieCatImg
    const text = "cat"
    const list = "Made with: HTML, CSS, JavaScript"
    const link = "https://cutiecats.netlify.app/"
    const title = "Cutie Cats"
    
    return <ProjectCard img={img} title={title} text={text} list={list} link={link} />

}

export default CutieCats;