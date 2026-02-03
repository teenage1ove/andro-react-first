import prod2 from '../../assets/prod2.jpg'

function ProductCard() {
  return (
    <div>
        <div>NEW</div>
        <img src={prod2} alt="" />
        <p>ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</p>
        <a href="">Подробнее →</a>
    </div>
  )
}

export default ProductCard