import '../css/about.css'

export const About = () => {
    return (
        <div className="about-page">
            <h1 className='tittle'>Sobre Mí</h1>
            <h2>
                Estiven <span>Moica</span>
            </h2>
            <span className="d-flex" >
                <h3 className='d-flex'>
                    +57 3196841202
                </h3>
                <span>
                    <a 
                        className="email-info" 
                        href="mailto:JEstivenMoica_2@outlook.com"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src="https://user-images.githubusercontent.com/87680255/229387345-bc33c866-535d-4c62-9ac0-77d04c72bc1c.png" alt="JEstivenMoica_2@outlook.com" />
                    </a>
                </span>
            </span>
            <br />
            <div className="text ">
                Sean bienvenidos a mi portafolio como Desarrollador Full Stack Web Developer. Actualmente me encuentro
                en la busqueda de mi primer empleo donde me pudea desarrollar y poner en practica lo aprendido, manejo 
                las siguientes tecnologías: JavaScript, HTML, CSS, Node.js, PostgreSQL, React, TypeScript. <br /> <br />
                Soy un apasionado por la programación y la resolución de problemas, desezo crecer en este ámbito aprendiendo
                las buenas prácticas y la forma más ágil y rápida de trabajar obteniendo los mejores resultados posibles
                en cada proyecto.
            </div>
            <br />
            <br />
            <div className="d-flex gap-4">
                <a 
                    className="btn btn-secondary shadow"
                    href="assets/CV  - Estiven Moica.pdf"
                    download
                >
                    <img className="imagen"  src="assets/logoPDF.jpeg" alt="Logo de PDF" />
                    Curriculum
                </a>
                <br /> <br />
                <a 
                    className="btn btn-secondary shadow"
                    href="https://github.com/Moiquin5254G"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                    <br />
                    GitHub
                </a>
                <br /> <br />
                <a 
                    href="https://www.linkedin.com/in/estiven-desarrolladorweb/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                >
                    <img src="https://user-images.githubusercontent.com/76783198/182481396-19c89e94-f3ba-4e33-9df4-f5b7a094cf8f.svg" alt="LinkedIn" />
                    <br />
                    Estiven Moica
                </a>
            </div>
        </div>
    )
}; 