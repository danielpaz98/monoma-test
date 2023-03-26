// STYLES
import Styles from "./styles";

interface IProps {
	children?: React.ReactNode;
}

export default function AuthLayout({ children }: IProps) {
	return <Styles.Main>{children}</Styles.Main>;
}
