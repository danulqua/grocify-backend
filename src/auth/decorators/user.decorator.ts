import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  return request.user;
});
