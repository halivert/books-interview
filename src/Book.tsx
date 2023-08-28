export interface IBook {
	id: number
	title: string
	author: string
	img: string
	description: string
}

const Book = ({ img, title, author }: Partial<IBook>) => {
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
