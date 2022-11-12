import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(
                (item) => <Item key={item.id} course={item} />
            )}
            <Total arr={course.parts.map(
                (course) => (course.exercises)
            )} />
        </div>
    )
}

const Item = ({ course }) => {
    return (
        <div>
            <p>
                {course.name} {course.exercises}
            </p>
        </div>
    )
}

const Total = ({ arr }) => {
    const getSum = arr.reduce(
        (s,i)=>s+i,0
    )
    return (
        <strong>
            total of {getSum} exercises
        </strong>
    )
}

export default Course