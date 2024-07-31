import "./tarefas.css"

function lista() {
    let tarefas=["tarefa 1", "tarefa 2", "tarefa 3"]

    return(

     <div className="tarefas">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNJblIGvpL5teBnBWpSazjdlF3L0gswmTJw&s" alt="Avatar" style={{width:"100%"}}/> 
        
        <div className= "flex-start">
            {lista.map((item, index) =>
            <FontAwesomeIcon key={index} icon={item}/>

            )}
            
         </div>
         <ul>
            {tarefas.map((l)=><li>{l}</li>)}
         </ul>
         

             <div className="container">
        
                
            </div>
    </div>
    ) 
}


export default lista;
