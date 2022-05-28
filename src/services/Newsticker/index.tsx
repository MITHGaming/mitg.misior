import { useFetch } from '@/lib/swr';
import { dateFormatNewsticker } from '@/utils/date-format';
import { useCallback, useEffect, useState } from 'react';

type INewstickers = {
  id: number;
  message: string;
  icon: string;
  created_at: string;
};

export const useNewsticker = () => {
  const url = `/api/newsticker?created_at=desc&limit=5`;
  const [newstickers, setNewstickers] = useState<INewstickers[]>([]);
  const [loading, setLoading] = useState(true);

  const { data, error, mutate, isValidating } = useFetch(url);

  const handleMutate = () => {
    mutate(url);
  };

  const newstickerWithFormat = useCallback(() => {
    const newstickersWithFormat = data.map((newsticker: INewstickers) => ({
      ...newsticker,
      created_at: dateFormatNewsticker(newsticker.created_at as any),
    }));

    return newstickersWithFormat;
  }, [data]);

  useEffect(() => {
    if (data) {
      setNewstickers(newstickerWithFormat());
      setLoading(false);
    }
  }, [newstickerWithFormat, data]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return { newstickers, isValidating, loading, handleMutate };
};

export default useNewsticker;
