const Book = ({ img, title, author }) => {
	const altImg = `The '${title}' book cover`

	return (
		<article className="book">
			<img src={img} alt={altImg} />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	)
}

export default Book
