import {useEffect, useState} from 'react';

export const useHotelsApi = setData => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const rawData = await fetch(
        'https://services.lastminute.com/mobile/stubs/hotels',
      );
      const data = await rawData.json();
      setData(data?.hotels ?? []);
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);
  return isLoading;
};
