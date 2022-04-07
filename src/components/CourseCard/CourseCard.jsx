function CourseCard({course}) {
  return (
    <div>
      <h1>{ course.name }</h1>
      <p>{ course.category }</p>
    </div>
  )
}

export default CourseCard;