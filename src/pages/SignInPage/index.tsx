// PLUGINS
import toast from "react-hot-toast";
// HOOKS
import { useAuth } from "~/hooks";
// TYPES
import { ISignInFormState } from "~/components/SignIn";
// LAYOUTS
import AuthLayout from "~/layouts/AuthLayout";
// COMPONENTS
import { SignIn as SignInForm, Toaster } from "~/components";
// ICONS
import { ReactComponent as Loader } from "~/assets/icons/loader.svg";

const SignInPage = () => {
	const { signIn, isLoading } = useAuth();

	const handleOnSubmit = async (form: ISignInFormState) => signIn({ ...form });

	return (
		<AuthLayout>
			<Toaster onClose={toast.dismiss} />

			<SignInForm
				description="Ingresa tu correo electrónico y la contraseña que tengas definida para que puedas acceder al sitio."
				disableSubmit={isLoading}
				submitText={
					<>{isLoading ? <Loader className="inline-block" fill="currentColor" height={14} /> : "Iniciar sesión"}</>
				}
				title="Iniciar sesión"
				onSubmit={handleOnSubmit}
			/>
		</AuthLayout>
	);
};

export default SignInPage;
