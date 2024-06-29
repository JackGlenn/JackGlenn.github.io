// import image from '/JackOfHearts.png'

function PortfolioItem({link, image, name, description}) {


    return (
        <a href={link} className="portfolioItem">
        <img src={image} />
        <div className='infoCard'>
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </a>
    )
}

export default PortfolioItem