import { useState } from "react"
import "./App.css"

import booksData from "./books"
import Book from "./Book"

function App() {
	const [books] = useState(booksData)

	return (
		<main>
			<section className="booklist">
				{books.map((book) => (
					<Book img={book.img} title={book.title} author={book.author} />
				))}
			</section>

			<section className="new-book">
				<div>
					<h1>New book</h1>

					{/* Your form here */}
				</div>
			</section>
		</main>
	)
}

export default App
