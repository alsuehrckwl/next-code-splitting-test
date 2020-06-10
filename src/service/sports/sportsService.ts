import Api from '../api';

class SportsService extends Api {
  constructor() {
    super();

    this.getSportsByTypeList = this.getSportsByTypeList.bind(this)
  }

  /**
   * @param {*} endPoint
   * @returns
   */
  public getSportsByTypeList(type: string) {
    return this.ajax('get', 'http://localhost:3001', `/sports/${type}`).then((res) => {
      if (res.status === 200) return res.data;
    });
  }
}

export default SportsService