import { Toaster as ReactHotToast, Toast as ToastType } from "react-hot-toast";
// ICONS
import { ReactComponent as IconSuccess } from "~/assets/icons/check.svg";
import { ReactComponent as IconWarning } from "~/assets/icons/warning.svg";
import { ReactComponent as IconError } from "~/assets/icons/error.svg";
import { ReactComponent as IconClose } from "~/assets/icons/close.svg";
// STYLES
import Styles from "./styles";

export enum ToastVariant {
	success = "success",
	warning = "warning",
	error = "error",
}

interface IProps {
	variant?: keyof typeof ToastVariant;
	onClose?: (toastId: string) => void;
	containerStyle?: object;
}

export type Toast = ToastType & {
	variant?: keyof typeof ToastVariant;
};

function ToastIcon({ variant = ToastVariant.success }: Omit<IProps, "text" | "onClose">) {
	const Icon = {
		[ToastVariant.success]: <IconSuccess fill="#fff" height={18} width={18} />,
		[ToastVariant.warning]: <IconWarning fill="#fff" height={18} width={18} />,
		[ToastVariant.error]: <IconError fill="#fff" height={18} width={18} />,
	};

	return Icon[variant];
}

const Toaster = ({ variant, onClose, containerStyle }: IProps) => {
	const handleOnClose = (toastId: string) => onClose && onClose(toastId);

	return (
		<ReactHotToast containerStyle={containerStyle}>
			{(toast: Toast) => {
				const toastVariant = variant || toast.variant;

				return (
					<Styles.Toast data-cy="signin-toaster" style={{ opacity: toast.visible ? 1 : 0 }} variant={toastVariant}>
						<Styles.ToastContent>
							<ToastIcon variant={toastVariant} />

							<Styles.ToastText>{toast.message as string}</Styles.ToastText>

							<Styles.ToastBtnClose type="button" onClick={() => handleOnClose(toast.id)}>
								<IconClose fill="#fff" height={16} width={16} />
							</Styles.ToastBtnClose>
						</Styles.ToastContent>
					</Styles.Toast>
				);
			}}
		</ReactHotToast>
	);
};

export default Toaster;
