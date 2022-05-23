import { AllActions } from "./actions";
import { AppState } from "./state";

export const reducer = (currentState: AppState, action: AllActions): AppState => {
	const { type } = action;

	switch (type) {
		case "login-action": {
			return { ...currentState, isLoggedIn: true };
		}

		case "logout-action": {
			return { ...currentState, isLoggedIn: false };
		}

		default: {
			const exhaustiveCheck: never = action;
			throw new Error(`Unhandled Action Case: ${exhaustiveCheck}`);
		}
	}
};
