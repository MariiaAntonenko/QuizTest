import React  from 'react';

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

const Question = ({
    handleOfAnswers,
    questions
}) => (
    <div>   
        <div className="m-40 text-center bg-green-100 rounded-lg shadow-2xl p-5">
          <h2 className="text-2xl">{questions.question}</h2>
        </div>
        <div className="grid gap-4 grid-cols-2 place-items-center">
            <button onClick={()  => handleOfAnswers(getKeyByValue(questions.variants, questions.variants.stern))} 
                                    type="button" 
                                    className="transition duration-500 ease-in-out bg-green-100 transform hover:-translate-y-1 hover:scale-110 w-1/2 p-4 bg-green-100 rounded-lg shadow-xl mb-4">
                                    {questions.variants.stern}
            </button>    
            <button onClick={()  => handleOfAnswers(getKeyByValue(questions.variants, questions.variants.funny))} 
                                    type="button"
                                    className="transition duration-500 ease-in-out bg-green-100 transform hover:-translate-y-1 hover:scale-110 w-1/2 p-4 bg-green-100 rounded-lg shadow-xl mb-4">
                                    {questions.variants.funny}
            </button>    
            <button onClick={()  => handleOfAnswers(getKeyByValue(questions.variants, questions.variants.outgoing))}
                                    type="button" className="transition duration-500 ease-in-out bg-green-100 transform hover:-translate-y-1 hover:scale-110 w-1/2 p-4 bg-green-100 rounded-lg shadow-xl mb-4">
                                    {questions.variants.outgoing}
            </button>    
            <button onClick={()  => handleOfAnswers(getKeyByValue(questions.variants, questions.variants.shy))} 
                                    type="button" className="transition duration-500 ease-in-out bg-green-100 transform hover:-translate-y-1 hover:scale-110 w-1/2 p-4 bg-green-100 rounded-lg shadow-xl mb-4">
                                    {questions.variants.shy}
            </button>    
        </div>
  </div>
  )

export default Question;