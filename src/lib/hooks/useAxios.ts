import {useState, useEffect} from 'react';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_HOST;

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === 'GET' || axiosParams.method === 'get',
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (e) {
      const err = e as AxiosError;
      setError(err);
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err.message);
      }
      console.log(err.config);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  useEffect(() => {
    if (axiosParams.method === 'GET' || axiosParams.method === 'get') {
      fetchData(axiosParams);
    }
  }, [axiosParams]);

  return {response, error, loading, sendData};
};

export default useAxios;
