import {useEffect, useState} from 'react';

export const useHotelsApi = setData => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const rawData = await fetch(
        'https://services.lastminute.com/mobile/stubs/hotels',
      );
      const data = await rawData.json();
      const listOfHotels = data?.hotels ?? [];
      setData(listOfHotels);
      setInitialData(listOfHotels);
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);
  return [isLoading, initialData];
};
