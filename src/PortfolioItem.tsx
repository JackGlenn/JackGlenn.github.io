// import image from '/JackOfHearts.png'

type PortfolioProp = {
    link: string;
    image: string;
    name: string;
    description: string;
};

function PortfolioItem({link, image, name, description}: PortfolioProp) {

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