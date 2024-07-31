import "./ListaDtarefas.css"
function ListaDTarefas(props){
    
    return (
        <figure className="lista"> 
        <figcaption>SOCORRO</figcaption>
        
            <img   src={props.imagem} />
            <figcaption>inferno</figcaption>
        </figure>
       
)
}

export default ListaDTarefas;