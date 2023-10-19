import { create } from "zustand";

interface UserState {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;

  setDefaultUser: () => void;
  signUp: (name: string, email: string) => void;
  logout: () => void;
}

export const useUser = create<UserState>((set) => ({
  name: "",
  setName: (name: string) => set({ name }),
  email: "",
  setEmail: (email: string) => set({ email }),

  setDefaultUser: () => setDefaultUser(),
  signUp: (name: string, email: string) => signUp(name, email),
  logout: () => logout(),
}));

function setDefaultUser(): void {
  useUser.setState({
    name: "",
    email: "",
  });
}

function signUp(name: string, email: string): void {
  useUser.setState({
    name,
    email,
  });
}

function logout(): void {
  setDefaultUser();
}
