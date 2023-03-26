// STYLES
import Styles from "./styles";
// IMAGES
import pokeBallRotate from "~/assets/images/pokeball-rotate.png";

interface IProps {
	text: string;
	isLoading?: boolean;
	className?: string;
}

const Loader = ({ text, isLoading, className }: IProps) => {
	if (!isLoading) return null;

	return (
		<Styles.Container className={className}>
			<Styles.Picture>
				<img alt="Loader" src={pokeBallRotate} />
			</Styles.Picture>
			{text}
		</Styles.Container>
	);
};

export default Loader;
