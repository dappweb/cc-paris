import { TimelineEvent, CollectionItem, Benefit, NavItem } from './types';
import { Crown, Landmark, Wine, Key, Plane, Utensils } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: '历史传承', href: '#history' },
  { label: '会员权益', href: '#benefits' },
  { label: '珍稀收藏', href: '#collection' },
  { label: '价值投资', href: '#investment' },
  { label: '联系我们', href: '#contact' },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  { year: '1782', title: '庄园建立', description: 'Paul Frédéric Roullet 建立了贝克城堡庄园 (Château de Brillac) 并开始干邑蒸馏业务。' },
  { year: '1791', title: '巴黎中央酒库创立', description: '获得凡尔赛宫及拿破仑军队供酒资格，正式创立 Chai Central de Paris。' },
  { year: '1920', title: 'Delamain 家族', description: 'Jacques 和 Robert Delamain 接手 Roullet 家族业务，更名为 Delamain。' },
  { year: '2015', title: '文艺复兴系列发布', description: 'Cognac Brillac Renaissance 向世界发布，展示最稀有、传统的干邑。' },
  { year: '2020', title: '进军中国', description: '巴黎中央酒库在大中华区开展业务，与罗斯柴尔德男爵等建立合作。' },
];

export const COLLECTION_DATA: CollectionItem[] = [
  { year: 2015, frenchName: 'Le Grand Terroir', chineseName: '原香', price: 98000, volume: '3750ml', description: '展现干邑最原始的风土气息。', status: 'sold_out' },
  { year: 2016, frenchName: "L'Époque", chineseName: '时光', price: 89500, volume: '3750ml', description: '记录岁月的沉淀与历史的痕迹。', status: 'sold_out' },
  { year: 2017, frenchName: 'La Vignoble Classique', chineseName: '古典葡园', price: 69800, volume: '3750ml', description: '致敬传统的葡萄种植艺术。', status: 'limited' },
  { year: 2018, frenchName: 'la Rivière Renaissance', chineseName: '复兴的长河', price: 53800, volume: '3750ml', description: '象征家族与品牌的复兴之路。', status: 'available' },
  { year: 2020, frenchName: 'Unis Nous', chineseName: '团结·胜利', price: 36500, volume: '3750ml', description: '纪念特殊年份的团结精神。', status: 'available' },
];

export const BENEFITS_DATA: Benefit[] = [
  { title: '城堡度假', description: '每年享有一周免费入住法国贝克城堡庄园(Château de Brillac)度假特权。', iconName: 'Landmark' },
  { title: '私人定制', description: '获取独一无二稀缺占有感，会员原桶干邑大师定制服务，家族徽章雕刻。', iconName: 'Crown' },
  { title: '珍稀配额', description: '优先获取全球限量“文艺复兴”系列大坛艺术干邑(3.75L)配额。', iconName: 'Wine' },
  { title: '顶级社交', description: '受邀参加巴黎、纽约、上海等地的私密会员晚宴，拓展全球精英人脉。', iconName: 'Utensils' },
  { title: '高端旅行', description: '协助安排高端旅行，由品牌大使协助安排法国干邑名庄深度探访。', iconName: 'Plane' },
  { title: '资产通证', description: '每坛干邑配有区块链NFT数字证书，确权资产，记录陈年数据。', iconName: 'Key' },
];

// Mock data based on the charts in the PDF showing Wine outperforming S&P
export const CHART_DATA = [
  { year: '2004', wine: 100, sp500: 100 },
  { year: '2006', wine: 150, sp500: 115 },
  { year: '2008', wine: 220, sp500: 80 },
  { year: '2010', wine: 280, sp500: 95 },
  { year: '2012', wine: 310, sp500: 125 },
  { year: '2014', wine: 290, sp500: 165 },
  { year: '2016', wine: 330, sp500: 180 },
  { year: '2018', wine: 390, sp500: 210 },
  { year: '2020', wine: 410, sp500: 240 },
  { year: '2021', wine: 450, sp500: 286 },
];
