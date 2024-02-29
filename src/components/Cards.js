import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {
    let allcourses = [];
    const getCourses = () =>{
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allcourses.push(course);
            })
        })
        return allcourses;
    }

    return (
    <div>
       { getCourses().map((course) => {
            <Card/>
        })
        }
    </div>
  )
}

export default Cards;