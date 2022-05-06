import React from "react";

function Favoritos(props){
    console.log(props.projetos)

    return(
        <>
            {props.projetos[0] !== undefined && (
                props.projetos.map(projeto => (
                    <h1>{projeto.name}</h1>
                ))
            )}

            {props.projetos[0] === undefined && (
                <h1>erro</h1>
            )}
        </>
    )
}

export default Favoritos