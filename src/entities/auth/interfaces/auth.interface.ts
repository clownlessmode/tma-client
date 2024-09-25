import { UserEntity } from "@/entities/user/interfaces/user.interface";

export interface LoginDto {
  id: string;
}
export interface LoginRo {
  tokens: {
    access: string;
    refresh: string;
  };
  user: UserEntity;
}
