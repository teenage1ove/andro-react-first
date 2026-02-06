import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import ProductCard from '../ProductCard/ProductCard'
import prod2 from '../../assets/prod2.jpg'
import prod3 from '../../assets/prod3.jpg'
import prod4 from '../../assets/prod4.jpg'

const projects = [
  {
    title: 'ЖК ПРАВОБЕРЕЖНЫЙ',
    square: 112,
    year: '2023',
    link: '/project1',
    image: prod2,
    isNew: true,
  },
  {
    title: 'ЖК НОРВЕЖСКИЙ ПАРК',
    square: 75,
    year: '2023',
    link: '/project2',
    image: prod3,
    isNew: false,
  },
  {
    title: 'ЖК СОСНОВСКИЕ ОЗЕРА',
    square: 94,
    year: '2022',
    link: '/project3',
    image: prod4,
    isNew: false,
  },

]

function ProductSection() {
  return (
    <div>
      <Heading 
        level='h2'
        text='ПРОЕКТЫ'/>
      
      {projects.map(project => {
        <ProductCard
          title={project.title}
          square={project.square}
          year={project.year}
          link={project.link}
          image={project.image}
          isNew={project.isNew} />
      }) }  

      <Button text='Смотреть все проекты'/>
    </div>
  )
}

export default ProductSection