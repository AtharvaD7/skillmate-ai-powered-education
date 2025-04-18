import React from 'react'
import ReactCardFlip from 'react-card-flip'

function FlashcardItem({isFlipped,handleClick,flashcard}) {
  return (
    <div className='flex items-center justify-center'>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='p-4 bg-blue-700 text-white flex items-center justify-center rounded-lg cursor-pointer shadow-lg h-[250px] w-[200px]
        md:h-[350px] md:w-[300px]' onClick={handleClick}>
          <h2>{flashcard?.front}</h2>
        </div>

        <div className='p-4 bg-white shadow-lg text-blue-700 flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px]
        md:h-[350px] md:w-[300px]' onClick={handleClick}>
          <h2>{flashcard?.back}</h2>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default FlashcardItem