/**
 * 文章模块接口管理
 */

import base from './base';

import axios from 'axios';

const article = {
  async getArticles() {
    const res = await axios.get(`${base.articles}/articles`);
    return res;
  },

  async getArticleById(id: number) {
    const res = await axios.get(`${base.articles}/article/${id}`);
    return res;
  }
  ,
  async getArticleByTypeId(id: number) {
    const res = await axios.get(`${base.articles}/articlesByTypeId/${id}`);
    return res
  }
}

export default article;