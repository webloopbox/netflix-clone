export interface RegisterCredentials {
  email: string;
  username: string;
  password: string;
  comfirmPassword: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserInitState {
  currentUserUid: string | undefined;
  errorMessage: string | undefined;
}
