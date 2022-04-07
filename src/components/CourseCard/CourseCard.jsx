function CourseCard({course}) {
  return (
    <>
      <h1>{ course.name }</h1>
      <p>{ course.category }</p>
    </>
  )
}

export default CourseCard;