import { Highlight } from "@components/Highlight";
import { ButtonText, CommandsWrapper, Container, ForgotPassword, ForgotText, Form, RegisterText, TextLink, TextRow } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Logo } from "@components/Logo";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { AppError } from "@utils/AppError";

type FormData = {
    email: string;
    password: string;
}


export function SignIn() {
    const [isLoading, setIsLoading] = useState(false)
    const { signIn } = useAuth()
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

    function handleNewAccount() {
        navigation.navigate("signUp")
    }

    async function handleSignIn({ email, password }: FormData) {
        try {
            setIsLoading(true)
            await signIn(email, password);

        } catch (error) {
            const isAppError = error instanceof AppError;

            const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'

            console.log("Error:", title)

            setIsLoading(false)

        }



    }

    return (
        <Container>
            <Logo />
            <Highlight
                title="Bem vindo de volta,"
                subtitle="Entre para continuar"
            />

            <Form>
                <Controller
                    control={control}
                    name="email"
                    rules={{ required: 'Informe o e-mail' }}
                    render={({ field: { onChange, value } }) => (
                        <Input label="Email" placeholder="Digite seu email" keyboardType="email-address" autoCapitalize="none" onChangeText={onChange} value={value}
                            errorMessage={errors.email?.message} />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{ required: 'Informe a senha' }}
                    render={({ field: { onChange, value } }) => (
                        <Input label="Senha" placeholder="Digite sua senha" secureTextEntry onChangeText={onChange} value={value}
                            errorMessage={errors.password?.message} />
                    )}
                />
                <ForgotPassword onPress={() => { }}>
                    <ForgotText>
                        Esqueceu a senha?
                    </ForgotText>
                </ForgotPassword>
            </Form>
            <CommandsWrapper>
                <Button
                    title="Continuar"
                    type="OUTLINED"
                    size="LARGE"
                    onPress={handleSubmit(handleSignIn)}
                />

                <TextRow>
                    <RegisterText>
                        Não tem uma conta?
                    </RegisterText>
                    <ButtonText onPress={handleNewAccount}>
                        <TextLink>
                            Registrar
                        </TextLink>
                    </ButtonText>
                </TextRow>
            </CommandsWrapper>
        </Container>
    )
}