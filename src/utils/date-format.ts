import { misiorWeb } from '../../misior.config';

export const dateFormatNewsticker = (date: Date, locale = `ptBr`): string => {
  const baseDate = new Date(date);
  const localeSplit = `${locale.slice(0, 2)}-${locale.slice(
    2,
    4,
  )}`.toLowerCase();

  const month = baseDate.toLocaleString(localeSplit, {
    month: `short`,
    timeZone: misiorWeb.timezone,
  });
  const day = baseDate.getDate();
  const year = baseDate.getFullYear();
  const hour = baseDate.getHours();
  const minute = baseDate.getMinutes();

  const dateFormat = `${month} ${day} ${year} - ${hour}:${minute}`;

  return dateFormat;
};