// STYLES
import Styles from "./styles";
// IMAGES
import pokeBall from "~/assets/images/pokeball.png";
// ICONS
import { ReactComponent as IconArrowBack } from "~/assets/icons/arrow-back.svg";

interface IProps {
	redirectTo: string;
	text: string;
	buttonText: string;
}

const Error404 = ({ redirectTo, text, buttonText }: IProps) => {
	return (
		<Styles.Container>
			<Styles.Content>
				<Styles.Text>4</Styles.Text>
				<Styles.Image alt="Pokeball" src={pokeBall} />
				<Styles.Text>4</Styles.Text>
			</Styles.Content>

			<Styles.Description>{text}</Styles.Description>

			<Styles.Link className="mt-4" to={redirectTo}>
				<IconArrowBack height={24} width={24} />
				<span>{buttonText}</span>
			</Styles.Link>
		</Styles.Container>
	);
};

export default Error404;
