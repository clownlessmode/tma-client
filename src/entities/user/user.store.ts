import { create } from "zustand";
import React from "react";
import { UserEntity } from "./interfaces/user.interface";

interface UserState {
  user: UserEntity | null;
  setUser: (data: UserEntity) => void;
  hydrate: () => void;
}

const useUserStoreBase = create<UserState>((set) => ({
  user: null,
  setUser: (data: UserEntity) => {
    set({ user: data });
    localStorage.setItem("user", JSON.stringify(data));
  },
  hydrate: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      set({ user: JSON.parse(storedUser) });
    }
  },
}));

const useUserStore = () => {
  const userState = useUserStoreBase((state) => state.user);
  const setUserState = useUserStoreBase((state) => state.setUser);
  const hydrate = useUserStoreBase((state) => state.hydrate);

  React.useEffect(() => {
    hydrate();
  }, []);

  return { userState, setUserState };
};

export default useUserStore;
