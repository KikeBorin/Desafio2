import React from "react";

function Favoritos(props) {
    console.log(props.projetos)

    return (
        <>
            {props.projetos[0] !== undefined && (
                props.projetos.map(projeto => (
                    <>
                        <ol class="list-group mb-2">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">{projeto.name}</div>
                                    {projeto.description}
                                </div>
                                <span class="badge bg-primary rounded-pill">{projeto.watchers}</span>
                            </li>                           
                        </ol>
                    </>
                ))
            )}

            {props.projetos[0] === undefined && (
                <h1>erro</h1>
            )}
        </>
    )
}

export default Favoritos