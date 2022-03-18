import './CoinCard.sass';
import { STATUS } from "enum";
import { formatDateString } from 'utils/date';
import defaultCoinLogo from 'assets/default-logo.svg';
import { useFetchCoinLogoQuery, useFetchCoinPriceQuery } from 'service/coin';

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
  const { data: coinLogo, isLoading: isCoinLogoLoading } = useFetchCoinLogoQuery(id);
  const { data: coinPrice, isLoading: isCoinPriceLoading } = useFetchCoinPriceQuery(id);

  const formattedDate = formatDateString(expiryDate);
  const formattedPrice = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(coinPrice || 0);

  return (
    <div className="card-root">
      <div className="card-header">
        <span className="coin-name">{name}</span>
        <span className="coin-status">{status}</span>
      </div>
      <div className="card-main">
        <div className='card-logo-container'>
          <figure className="card-logo">
            {
              isCoinLogoLoading ? <div></div> : <img src={coinLogo || defaultCoinLogo} />
            }
          </figure>
        </div>
        <div className="card-info">
          <span className='coin-price'>{isCoinPriceLoading ? '' : formattedPrice}</span>
          <span className='coin-expiry-date'>End: {formattedDate}</span>
        </div>
      </div>
    </div>
  )
}

export default CoinCard;