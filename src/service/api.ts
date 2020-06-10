import axios from 'axios';

class Api {
  async ajax(method, apiUrl, url, data?) {
    const axiosResult = !data
      ? await axios[method](`${apiUrl}${url}`, {
          headers: {
            'content-type': 'application/json',
            'Cache-Control': 'no-cache'
          }
        })
      : await axios[method](`${apiUrl}${url}`, data, {
          headers: {
            'content-type': 'application/json',
            'Cache-Control': 'no-cache'
          }
        });

    return axiosResult;
  }

  // async jwtAjax(method, apiUrl, url, data) {
  //   const axiosResult = !data
  //     ? await axios[method](`${apiUrl}${url}`, {
  //         headers: {
  //           Authorization: `Bearer ${Cookie.getCookie('access_token')}`,
  //           'content-type': 'application/json',
  //           'Cache-Control': 'no-cache'
  //         }
  //       })
  //     : await axios[method](`${apiUrl}${url}`, data, {
  //         headers: {
  //           Authorization: `Bearer ${Cookie.getCookie('access_token')}`,
  //           'content-type': 'application/json',
  //           'Cache-Control': 'no-cache'
  //         }
  //       });

  //   return axiosResult;
  // }
}

export default Api;
