import { useEffect, useRef } from "react";
import closeIcon from "../../../assets/images/Close_Icon.png";

export default function ModalDemo(props) {
	const { open, close, title, children } = props;
	const dialogRef = useRef(null);
	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (open) {
			if (!dialog.open) dialog.showModal();
		} else {
			if (dialog.open) dialog.close();
		}
	}, [open]);

	return (
		<div>
			<dialog ref={dialogRef} className="popup" id="editFormPopup">
				<div className="popup__content">
					<h3 className="popup__title">{title}</h3>
					<button
						aria-label="Close modal"
						className="popup__close"
						type="button"
						onClick={close}
					>
						<img src={closeIcon} alt="" />
					</button>

					{children}
				</div>
			</dialog>
		</div>
	);
}
