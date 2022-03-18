import './CoinStatus.sass';
import { STATUS } from "enum";
import StatusIcon from "./icons/StatusIcon";

const getStatusColor = (status: keyof typeof STATUS): string => {
  switch (status) {
    case 'active':
      return '#76FCB3';
    case 'suspended':
      return '#FFE500';
    case 'terminated':
      return '#FF007A';
  }
}

type CoinStatusProps = {
  status: keyof typeof STATUS;
}

const CoinStatus = ({ status }: CoinStatusProps) => {
  const statusColor = getStatusColor(status);

  return (
    <div className="coin-status-root">
      <StatusIcon color={statusColor} />
      <span style={{ color: statusColor }}>{status}</span>
    </div>
  )
}

export default CoinStatus;