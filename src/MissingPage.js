import React from 'react'
import {Link} from 'react-router-dom'

const MissingPage = () => {
  return (
      <main className='Missing'>
        <h2>Page Not Found</h2>
        <p>Well, thats disappointing.</p>
        <p>
          <Link to="/">Visit Our HomePage</Link>
        </p>
      </main>
  )
}

export default MissingPage
