export interface IAuthState {
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    user: {
      id: string;
      email: string;
    } | null;
}

export interface IUserPreferenceState {
    loading: boolean;
    initialized: boolean;
    error: string | null;
    preferences: {
        theme: string;
        locale: string;
        onboarded: boolean;
    }
}