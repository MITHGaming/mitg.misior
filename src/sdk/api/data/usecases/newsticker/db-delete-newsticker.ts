import { newsticker } from '@prisma/client';
import prisma from '@/sdk/lib/prisma';

export const DbDeleteNewsticker = async (
  id: DbDeleteNewstickerSpace.Params,
) => {
  const newstickerFounded = await prisma.newsticker.findUnique({
    where: {
      id,
    },
  });

  if (!newstickerFounded) {
    return null;
  }

  return await prisma.newsticker.delete({
    where: {
      id,
    },
  });
};

export namespace DbDeleteNewstickerSpace {
  export type Params = number;
  export type Result = newsticker | null;
}

export default DbDeleteNewsticker;
