import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const HasuraClaims = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user;

  return data ? user?.['https://hasura.io/jwt/claims'][data] : user?.['https://hasura.io/jwt/claims'];
});
