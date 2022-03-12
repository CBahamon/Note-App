import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>

			<NotesAppBar />

			<div className='notes__content'>
				<input
					type="text"
					placeholder='Tittle'
					className='notes__title-input'
					autoComplete='off'
				/>

				<textarea
					placeholder='What will you do?'
					className='notes__textarea'
				>
				</textarea>

				<div className='notes__image'>
					<img
						src='https://imgs.search.brave.com/fxKgF9jmS9ciAVl6SnIu9rJZl3xsVYSUjKoy9vuzR9U/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeVNxYTU1/UEMzbHRNSGxWRVZY/Ui1GUWMyaVIwTmtu/OURiRUdnPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v'
						alt="Joy Boy"
					/>
				</div>
			</div>
		</div>

	)
}
