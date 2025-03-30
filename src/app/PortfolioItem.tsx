// import image from '/JackOfHearts.png'
import Link from "next/link"

type PortfolioProp = {
    link: string;
    image?: string;
    name: string;
    description: string;
};

function PortfolioItem({link, image, name, description}: PortfolioProp) {

    return (
      <Link href={link} className="portfolioItem">
        <img src={image} />
        <div className='infoCard'>
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </Link>
    )
}

export default PortfolioItem