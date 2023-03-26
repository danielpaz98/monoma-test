// STYLES
import Styles from "./styles";
// COMPONENTS
import { ErrorMessage } from "~/components";
import Input from "./Input";
// PLUGINS
import { useForm } from "react-hook-form";

export interface ISignInFormState {
	email: string;
	password: string;
}

interface IProps {
	title?: string | JSX.Element;
	description?: string | JSX.Element;
	email?: string;
	submitText?: string | JSX.Element;
	disableSubmit?: boolean;
	onSubmit?: (_data: ISignInFormState) => void;
}

const SignInForm = ({ title, description, email, submitText = "Submit", disableSubmit, onSubmit }: IProps) => {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<ISignInFormState>({
		mode: "onChange",
	});

	const handleOnSubmit = handleSubmit((data) => onSubmit && onSubmit(data));

	return (
		<Styles.Card>
			{title && <Styles.Title>{title}</Styles.Title>}

			{description && <Styles.Description>{description}</Styles.Description>}

			<Styles.Form autoComplete="off" data-cy="signin-form" onSubmit={handleOnSubmit}>
				<div>
					<Input
						required
						defaultValue={email}
						label="Correo electrónico"
						placeholder="Ingresa tu correo electrónico"
						type="text"
						{...register("email", {
							required: {
								value: true,
								message: "Campo obligatorio",
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: "El campo debe ser un email válido",
							},
						})}
					/>

					<ErrorMessage error={errors.email} />
				</div>

				<div>
					<Input
						required
						label="Contraseña"
						placeholder="Ingresa tu contraseña"
						type="password"
						{...register("password", {
							required: {
								value: true,
								message: "Campo obligatorio",
							},
							minLength: {
								value: 6,
								message: "La contraseña contener al menos 6 caracteres",
							},
						})}
					/>

					<ErrorMessage error={errors.password} />
				</div>

				<Styles.Button className="mt-1" disabled={!isValid || disableSubmit} type="submit">
					{submitText}
				</Styles.Button>
			</Styles.Form>
		</Styles.Card>
	);
};

export default SignInForm;
