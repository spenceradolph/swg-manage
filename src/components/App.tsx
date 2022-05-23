import { CSSProperties, useReducer } from "react";
import { InitialState, reducer } from "../state";
import { AdminPage } from "./AdminPage";
import { LoginPage } from "./LoginPage";

const appStyle: CSSProperties = {
	backgroundColor: "grey",
	height: "100vh",
	width: "100vw",
};

export const App = () => {
	const [state, dispatch] = useReducer(reducer, InitialState);

	const { isLoggedIn } = state;

	return <div style={appStyle}>{isLoggedIn ? <AdminPage {...{ state, dispatch }} /> : <LoginPage {...{ state, dispatch }} />}</div>;
};
