export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CollectionItem {
  id?: string;
  year: number;
  frenchName: string;
  chineseName: string;
  price: number;
  volume: string;
  description: string;
  image?: string;
  status: 'available' | 'sold_out' | 'limited';
  tier?: 'A' | 'B' | 'C'; // FRD A2: Brand Classification
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// FRD A1: User & Region Types
export type Region = 'CN' | 'HK' | 'OVERSEAS';

export interface UserProfile {
  id: string;
  name: string;
  region: Region;
  kycStatus: 'verified' | 'pending' | 'none';
  points: number;       // FRD A5
  rebateBalance: number; // FRD A4
  walletAddress?: string; // FRD D1
  inviteCode: string;   // FRD A4
}

// FRD A6: User Owned NFT
export interface OwnedNFT extends CollectionItem {
  tokenId: string;
  purchaseDate: string;
  canTransfer: boolean; // FRD A7
  canTrade: boolean;    // FRD A7 (Secondary market)
}
