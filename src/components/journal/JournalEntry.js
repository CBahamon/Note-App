import React from 'react'

export const JournalEntry = () => {
  return (
	<div className='journal__entry pointer' >
		<div 
			className='journal__entry-picture'
			style={{
				backgroundSize:'cover',
				backgroundImage: 'url(https://imgs.search.brave.com/_F33YL6PjEF7gmVeeq-SG9O2crM3mhtNUPVnlCZcUgE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/ZWNhcnRlbGVyYS5j/b20vbm90aWNpYXMv/NTYzMDAvNTYzNjEt/bS5qcGc)'
			}}		
		>
		</div>

		<div className='journal__entry-body'>
			<p className='journal__entry-title'>
				Un nuevo dia
			</p>
			<p className='journal__entry-content'>
				Lorem ipsmsakfjhgakfgdkjfhghkldgkhlsgkh
			</p>
		</div>

		<div className='journal__entry-date-box'>
			<span>Monday</span>
			<span>29</span>
		</div>
	</div>
  )
}
