import { baseApi } from "@/shared/api/base-api";
import { LoginDto, LoginRo } from "./interfaces/auth.interface";

export default class AuthService {
  static async login(data: LoginDto): Promise<LoginRo> {
    const response = await baseApi.post<LoginRo>("/auth/login", data);
    return response.data;
  }
}
