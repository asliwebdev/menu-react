import React from 'react'

const Categories = ({categories, onFilter}) => {
  return (
    <div className='btn-container'>
        {categories.map(category => {
            return <button type='button' className='btn' key={category} onClick={() => onFilter(category)}>
                {category}
            </button>
        })}
    </div>
  )
}

export default Categories