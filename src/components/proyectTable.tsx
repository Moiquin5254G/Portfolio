import { proyects } from "../proyects/data";

export const ProyectTable = () => {
    let count = 1;

    return (
        <div className="table-container scroller rounded shadow">
            <table className="table table-light table-hover">
                <thead className="table-secondary sticky-top">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Lenguaje</th>
                        <th scope="col">Framework/libreria</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>

                {proyects.map((e) => (
                    <tbody key={e.title}>
                        <tr className="black">
                            <th scope="row">{count++}</th>
                            <td>{e.title}</td>
                            <td>{e.languages}</td>
                            <td>{e['framework-libreria']}</td>
                            <td>
                                {e.link.map((link, index) => (
                                    <a key={index} href={link} target="_blank" 
                                    rel="noopener noreferrer" className="btn btn-outline-dark" >GitHub {index + 1}</a>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
};