import React from 'react'

export const WeddingPage = ({title="No Title Provided", author= "No Author", pages=0}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pages</p>
		</section>
	)
}