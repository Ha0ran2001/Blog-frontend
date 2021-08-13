import base from './base';
import axios from 'axios';

const articleType = {
  async getAllTypes() {
    const res = await axios.get(`${base.articleTypes}/articleTypes`);
    return res;
  }
}

export default articleType;