import { Highlight } from "@components/Highlight";
import { ButtonText, CommandsWrapper, Container, Form, RegisterText, TextLink, TextRow } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Logo } from "@components/Logo";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { AppError } from "@utils/AppError";
import { api } from "@services/api";

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
    password: yup.string().required('Informe a senha').min(6, "A senha deve ter pelo menos 6 dígitos."),
    password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref
        ("password"), ""], "A confirmação da senha não confere.")
});


export function SignUp() {
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleLogin() {
        navigation.navigate("signIn")
    }

    const { signIn } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema),
    });


    async function handleSignUp({ name, email, password }: FormDataProps) {
        try {
            setIsLoading(true)
            await api.post('/auth/signup', { name, email, password })
            await signIn(email, password)

        } catch (error) {
            console.log(error)
            setIsLoading(false)
            const isAppError = error instanceof AppError;

            const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde';

            console.log("ERROR: ", title)
        }
    }

    return (
        <Container>
            <Logo />
            <Highlight
                title="Bem vindo,"
                subtitle="Registre-se para continuar"
            />

            <Form>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="Nome"
                            placeholder="Digite seu nome completo"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.name?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="Email"
                            placeholder="Digite seu email"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="Senha"
                            placeholder="Digite sua senha"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.password?.message}
                            secureTextEntry
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password_confirm"
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="Senha"
                            placeholder="Confirme a sua senha"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.password_confirm?.message}
                            secureTextEntry
                        />
                    )}
                />
            </Form>
            <CommandsWrapper>
                <Button
                    title="Crie sua Conta"
                    type="FILLED"
                    size="LARGE"
                    onPress={handleSubmit(handleSignUp)}
                />

                <TextRow>
                    <RegisterText>
                        Já tem uma conta?
                    </RegisterText>
                    <ButtonText onPress={handleLogin}>
                        <TextLink>
                            Entrar
                        </TextLink>
                    </ButtonText>
                </TextRow>
            </CommandsWrapper>
        </Container>
    )
}