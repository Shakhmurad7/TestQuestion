import React, { useState } from 'react'

const questions =[
    {
        title:'React nedi?',
        variants: ['Kitabxana' ,'Framevork' , 'tətbiq'],
        correct:0
    },
    {
        title:'JS - necenci ilde yaranib',
        variants: ['1992' ,'1995' , '1999'],
        correct:1
    },
    {
        title:'Hansi proqramlasdirma dilidi',
        variants: ['JavaScript' ,'CSS' , 'HTML'],
        correct:0
    }
]


const Game = ({question , OnClickVariants})=>{
    return(
        <>
            <div className="game-container">
                         <h2>{question.title}</h2>
                        <div className="game-li">
                            {question.variants.map((item , index)=>(
                                <li onClick={()=>OnClickVariants(index)} key={item}>{item}</li>
                            ))}
                        </div>
            </div>
        </>
    )
}


function TestQuestion() {
    const [step , setStep] = useState(0)
    const question = questions[step]
    const OnClickVariants = (index)=>{
        console.log(step , index);
        setStep(step + 1)
    }
  return (
    <>  
     <Game question={question} OnClickVariants={OnClickVariants} />
    </>
  )
}

export default TestQuestion