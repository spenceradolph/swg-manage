import { Dispatch, MouseEventHandler, useState } from "react";
import { AllActions, AppState } from "../../state";
import { setupSocket } from "../../state/websocket";

type LoginProps = {
	state: AppState;
	dispatch: Dispatch<AllActions>;
};

export function LoginPage({ state, dispatch }: LoginProps) {
	const [host, setHost] = useState("");
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const loginAction: MouseEventHandler<HTMLButtonElement> = async (e) => {
		try {
			const WSClient: WebSocket = await new Promise(function (resolve, reject) {
				var server = new WebSocket("ws://localhost:8080?auth=put_auth_here", "echo-protocol");
				server.onopen = function () {
					resolve(server);
				};
				server.onerror = function (err) {
					reject(err);
				};
			});
			setupSocket(WSClient, dispatch);
		} catch (error) {
			alert("error in socket stuff");
		}
	};

	return (
		<div style={{ padding: "50px", textAlign: "center" }}>
			<div>
				Server Host: <input placeholder="ws://hostname" value={host} onChange={(e) => setHost(e.target.value)} />
			</div>
			<div>
				Username: <input value={user} onChange={(e) => setUser(e.target.value)} />
			</div>
			<div>
				Password: <input value={pass} onChange={(e) => setPass(e.target.value)} />
			</div>
			<button onClick={loginAction}>Log In</button>
		</div>
	);
}
