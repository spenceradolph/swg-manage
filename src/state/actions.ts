type LoginAction = {
  type: "login-action";
};

type LogoutAction = {
  type: "logout-action";
};

export type AllActions = LoginAction | LogoutAction;
