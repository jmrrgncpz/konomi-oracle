import './CoinCard.sass';
import { STATUS } from "enum";
import { parseISOString } from 'utils/date';

export type CoinCardProps = {
  id: number;
  name: string;
  status: keyof typeof STATUS;
  expiryDate: string;
}

const dateTimeFormatOptions = {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit'
} as Intl.DateTimeFormatOptions;

const CoinCard = ({ id, name, status, expiryDate }: CoinCardProps) => {
  const logo = <svg></svg>;
  const price = 1000;
  const formattedPrice = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(price);
  const formattedDate = new Intl.DateTimeFormat('en-us', dateTimeFormatOptions)
    .format(parseISOString(expiryDate));

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
          <span>{formattedPrice}</span>
          <span>End: {formattedDate}</span>
        </div>
      </div>
    </div>
  )
}

export default CoinCard;