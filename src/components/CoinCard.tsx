import './CoinCard.sass';
import { STATUS } from "enum";
import { formatDateString } from 'utils/date';
import defaultCoinLogo from 'assets/default-logo.svg';
import { useFetchCoinLogoQuery, useFetchCoinPriceQuery } from 'service/coin';
import CoinStatus from './CoinStatus';
import { classNames, withSkeleton } from 'utils/classname';
import { ReactNode } from 'react';

export type CoinCardProps = {
  id: number;
  name: string;
  status: keyof typeof STATUS;
  expiryDate: string;
}

const renderOnLoad = (el: ReactNode, isLoading: boolean) => {
  return isLoading ? '' : el;
}

const CoinCard = ({ id, name, status, expiryDate }: CoinCardProps) => {
  const { data: coinLogo, isLoading: isCoinLogoLoading } = useFetchCoinLogoQuery(id);
  const { data: coinPrice, isLoading: isCoinPriceLoading } = useFetchCoinPriceQuery(id);

  const formattedDate = formatDateString(expiryDate);
  const formattedPrice = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(coinPrice || 0);

  const isLoading = isCoinLogoLoading || isCoinPriceLoading;

  return (
    <div className="card-root">
      <div className="card-header">
        <div className='coin-name-container'>
          <span className={withSkeleton(['coin-name'], isLoading)}>{renderOnLoad(name, isLoading)}</span>
        </div>
        <div className='coin-status-container'>
          {renderOnLoad(<CoinStatus status={status} />, isLoading)}
        </div>
      </div>
      <div className="card-main">
        <div className='card-logo-container'>
          <figure className={withSkeleton(['card-logo'], isLoading)}>
            {
              renderOnLoad(<img src={coinLogo || defaultCoinLogo} />, isLoading)
            }
          </figure>
        </div>
        <div className="card-info">
          <span className={withSkeleton(['coin-price'], isLoading)}>{renderOnLoad(formattedPrice, isLoading)}</span>
          <span className={withSkeleton(['coin-expiry-date'], isLoading)}>{renderOnLoad(`End: ${formattedDate}`, isLoading)}</span>
        </div>
      </div>
    </div>
  )
}

export default CoinCard;