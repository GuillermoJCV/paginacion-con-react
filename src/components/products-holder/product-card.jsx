import "./product-card.css"

/* CamelCase */
function ProductCard({title, imageURL, price}) {

	return (
		<section className="card">
			<figure>
				<img src={imageURL} alt={imageURL}/>
				<figcaption>{title}</figcaption>
			</figure>
			<p>$ {price}</p>
			<button>Comprar</button>
		</section>
	)
}

export default ProductCard

/*
El export normal devuelve un objeto
{}

Mientras que el export default devuelve cualquier cosa que le demos

*/