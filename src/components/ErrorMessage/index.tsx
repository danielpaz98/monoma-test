// TYPES
import { FieldError } from "react-hook-form";
// STYLES
import Styles from "./styles";
// ICONS
import { ReactComponent as IconAlert } from "~/assets/icons/warning.svg";

interface IProps {
	error: FieldError | undefined;
}

const ErrorMessage = ({ error }: IProps) => {
	return (
		<Styles.Container>
			{error?.type && (
				<p>
					<IconAlert fill="currentColor" height={15} width={15} />
					<span>{error?.message}</span>
				</p>
			)}
		</Styles.Container>
	);
};

export default ErrorMessage;
