import "../../Styles/Main.css";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import ProfileAddButton from "./ProfileAddButton";

export default function Main() {
	return (
		<main className="main">
			<ProfilePhoto />
			<ProfileInfo />
			<ProfileAddButton />
		</main>
	);
}
