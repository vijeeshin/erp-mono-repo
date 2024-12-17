import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Role } from '../roles/role.interface';
import { RolesGuard } from '../guards/roles.guard';
import { Auth } from './auth.decorator';
export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    Auth(),
    UseGuards(RolesGuard)
  );
};
