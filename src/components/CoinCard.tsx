import './CoinCard.sass';
import { STATUS } from "enum";

export type CoinCardProps = {
  id: number;
  name: string;
  status: keyof typeof STATUS;
  expiryDate: string;
}

const CoinCard = ({ id, name, status, expiryDate }: CoinCardProps) => {
  const logo = <svg></svg>;
  const price = 1000;

  return (
    <div className="card-root">
      <div className="card-header">
        <span className="coin-name">{name}</span>
        <span className="coin-status">{status}</span>
      </div>
      <div className="card-main">
        <div className="card-logo-container">
          {logo}
        </div>
        <div className="card-info">
          <span>{price}</span>
          <span>End: {expiryDate}</span>
        </div>
      </div>
    </div>
  )
}

export default CoinCard;