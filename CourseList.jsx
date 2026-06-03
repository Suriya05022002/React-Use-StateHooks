import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.jpg'
import Course from './Course'
function CourseList()
{

  const Datas = [
    {
      id :1,
      name: "HTML",
      price: 199,
      image: html,
      rating: 3
    },
    {
      id :2,
      name: "CSS",
      price: 299,
      image: css,
      rating: 4
    },
    {
      id :3,
      name: "JS",
      price: 399,
      image: js ,
      rating: 5
    },
    {
        id :4,
        name:"react",
        price:899,
        image: html ,
        rating :4.5
    }
  ]
// Datas.sort((x,y)=> y.rating-x.rating)//decending
// Datas.sort((x,y)=> x.rating-y.rating)//ascending

// const FtCourses= Datas.filter((course) => 
//   course.price < 200)


const Coursess = Datas.map((course)=> 
    <Course 
    name={course.name}
    key={course.id}
    image={course.image}
    price={course.price}
    rating={course.rating}
    />
) 
    return(
        <>
        {Coursess}
        </>
    )
}
export default CourseList



