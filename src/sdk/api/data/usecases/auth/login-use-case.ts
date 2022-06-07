import {
  DbGetAccountByEmail,
  DbUpdateAccountLastLogin,
} from '@/sdk/api/infra/database';
import { LoginFailedError } from '@/sdk/api/presentation/errors';
import { badRequest } from '@/sdk/api/presentation/helpers';
import bcrypt from 'bcrypt';

export const LoginUseCase = async ({
  email,
  password,
}: LoginUseCaseSpace.Params) => {
  const account = await DbGetAccountByEmail({
    email,
  });

  if (!account) {
    return badRequest(new LoginFailedError());
  }

  const isValid = bcrypt.compareSync(password, account.password);

  if (!isValid) {
    return badRequest(new LoginFailedError());
  }

  const accountWithoutPassword = {
    ...account,
    password: undefined,
  };

  await DbUpdateAccountLastLogin({ email: account.email });

  return accountWithoutPassword;
};

export namespace LoginUseCaseSpace {
  export type Params = {
    email: string;
    password: string;
  };
}
