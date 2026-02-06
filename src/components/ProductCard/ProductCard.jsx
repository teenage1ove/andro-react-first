function ProductCard(props) {
  return (
    <div>
        {props.isNew && (<div>isNew</div>)}
        <img src={props.image} alt={props.title} />
        <p>{props.title} — {props.square} м² — {props.year}</p>
        <a href={props.link}>Подробнее →</a>
    </div>
  )
}

export default ProductCard