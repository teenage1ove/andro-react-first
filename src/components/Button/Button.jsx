function Button(props) {
  return (
    <button 
      onClick={props.onClick}
      disabled={props.isDisabled}
        >{props.text}</button>
  )
}

export default Button