export interface ICoinModel {
  id: number;
  blockNumber: number;
  transactionIndex: number;
  sources: number[];
  symbol: string;
  slug: string;
  leaseEnd: number;
  subscriptionId: number;
  networkId: number;
  aggregationStrategy: number;
  reportingStrategy: number;
  status: number;
  client: {
    clientType: number;
    connectionInfo: {
      contactAddress: string;
      networkId: number;
    }
  };
  createdTimestamp: string;
  updatedTimestamp: string;
  display: boolean;
}