import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x21B4B22Af6d4c1E50A3dec877eC7fc9553C21ef8'

);

export default instance;
