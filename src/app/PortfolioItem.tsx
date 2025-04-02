// import image from '/JackOfHearts.png'
import Link from "next/link"

type PortfolioProp = {
  link: string;
  image?: string;
  name: string;
  description: string;
};

export default function PortfolioItem({link, image, name, description}: PortfolioProp) {
  if (image) {
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

  return (
    <Link href={link} className="portfolioItem">
      <div className='infoCard'>
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </Link>
  )
}
