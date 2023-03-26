import { forwardRef, useState } from "react";
// STYLES
import Styles from "./styles";
// ICONS
import { ReactComponent as IconEye } from "~/assets/icons/eye.svg";
import { ReactComponent as IconEyeOff } from "~/assets/icons/eye-off.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	placeholder?: string;
	type: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
	(
		{ type: typeProp, name, label, placeholder, onChange, ...rest }: InputProps,
		ref?: React.Ref<HTMLInputElement>
	): JSX.Element => {
		const { className, ...otherProps } = rest;
		const [passwordShown, setPasswordShown] = useState(false);
		const type = typeProp === "password" ? (passwordShown ? "text" : "password") : typeProp;

		return (
			<Styles.Container className={className}>
				{label && (
					<Styles.Label htmlFor={name} required={otherProps.required}>
						{label}:
					</Styles.Label>
				)}
				<Styles.InputContainer>
					<Styles.Input
						ref={ref}
						id={name}
						name={name}
						placeholder={placeholder}
						type={type}
						onChange={onChange}
						{...otherProps}
					/>

					{typeProp === "password" && (
						<button className="ml-2 outline-none" type="button" onClick={() => setPasswordShown(!passwordShown)}>
							{passwordShown ? <IconEyeOff height={24} width={24} /> : <IconEye height={24} width={24} />}
						</button>
					)}
				</Styles.InputContainer>
			</Styles.Container>
		);
	}
);

Input.displayName = "Input";

export default Input;
