import { UseGuards, applyDecorators } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/auth.guard';

export const Auth = () => {
  return applyDecorators(UseGuards(JwtAuthGuard));
};
