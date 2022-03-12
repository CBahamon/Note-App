import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { Siderbar } from './Siderbar'
// import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>

      <Siderbar />

      <main>

        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  )
}
