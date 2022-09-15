function Form(props){
 
  return(
    <>
      {props.placeholder}<br/>
        <input 
          type={props.type}
          className="form-control"
          id={props.name}
          placeholder={props.placeholder} 
          onChange={props.onChange}
        />

    </>
    
    
 );
}