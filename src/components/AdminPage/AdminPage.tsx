import { Dispatch } from "react";
import { AllActions, AppState } from "../../state";

type AdminProps = {
	state: AppState;
	dispatch: Dispatch<AllActions>;
};

export function AdminPage({ state, dispatch }: AdminProps) {
	return (
		<div>
			<div>Connection Info</div>
			<div>Logs</div>
			<div>Accounts</div>
			<div>Settings</div>
			<div>Control</div>
		</div>
	);
}
