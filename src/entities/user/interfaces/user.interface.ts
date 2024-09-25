import BaseEntity from "@/shared/types/base-entity.interface";

export interface UserEntity extends BaseEntity {
  meta: MetaEntity;
  telegram: TelegramEntity;
  refreshToken: string | null;
}

export interface TelegramEntity extends BaseEntity {
  telegramId: number;
  firstName: string | null;
  lastName: string | null;
  username: string | null;
}

export interface MetaEntity extends BaseEntity {
  team: TeamEntity;
  avatar: string | null;
  role: Role;
}

export interface TeamEntity extends BaseEntity {
  name: string | null;
}

export enum Role {
  ADMIN = "ADMIN",
  LEADER = "LEADER",
  MEMBER = "MEMBER",
}
