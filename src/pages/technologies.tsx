import '../css/techonologies.css'

export const Technologies = () => {
    return (
        <>
            <div className="technologies-page">
                <h2>Tecnologías</h2>
                <h4>LENGUAJES DE PROGRAMACIÓN Y HERRAMIENTAS</h4>
                <ul>
                    <li>
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div className="text-left">
                            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                            <br /> 
                            <img className="ml" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                        </div>
                    </li>
                </ul>
                <h4 className="desarrollo">FrontEnd</h4>
                <ul>
                    <li className="text-muted">
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div className="text-left">
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
                        </div>
                    </li>
                    <li className="text-muted">
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div className="text-left" >
                            <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                            <br />
                            <img src="https://img.shields.io/badge/-Tailwind-green" alt="Tailwind" className="img-fluid" style={{ width: '5rem' }} />
                        </div>
                    </li>
                    <li className="text-muted">
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div>
                            <img src="https://img.shields.io/badge/-Dise%C3%B1o%20responsive-lightgrey" alt="Diseño responsive" className="img-fluid" style={{ width: '11rem' }} />
                        </div>
                    </li>
                    <li className="text-muted">
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div>
                            <img src="https://img.shields.io/badge/-Peticiones%20a%20APIs-yellowgreen" alt="Peticiones a APIs" className="img-fluid" style={{ width: '11rem' }} />
                        </div>
                    </li>
                </ul>
                <h4 className="desarrollo" >BackEnd</h4>
                <ul>
                    <li className="text-muted">
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div className="text-left">
                            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                            <br />
                            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" />
                        </div>
                    </li>
                    <li className="text-muted">
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div>
                            <img src="https://img.shields.io/badge/-SQL%20y%20Bases%20de%20datos%20relacionales-blue" alt="SQL y Bases de datos relacionales" style={{ width: '15rem' }} />
                        </div>
                    </li>
                </ul>
                <h4 className="desarrollo" >Conocimientos Generales</h4>
                <ul>
                    <li className="text-muted">
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div>
                            <img src="https://img.shields.io/badge/-Control%20de%20versiones%20de%20Git-red" alt="Control de versiones de Git" className="img-fluid" style={{ width: '12rem' }} />
                        </div>
                    </li>
                    <li className="text-muted">
                        <span className="check-icon">
                            <i className="bi bi-check2" />
                        </span>
                        <div>
                            <img src="https://img.shields.io/badge/-Desarrollo%20agil%20%26%20Scrum-orange" alt="Desarrollo agil & Scrum" className="img-fluid" style={{ width: '11rem' }} />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
};