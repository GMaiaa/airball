import { TextInputProps } from "react-native";
import { InputTypeStyleProps, Container, InputField } from "./styles";
import theme from "@theme/index";
import { useState } from "react";

type Props = TextInputProps & {
    placeholder: string;
    type?: InputTypeStyleProps;
    hasContent?: any;
};

export function Input({ placeholder, type = 'DEFAULT', ...rest }: Props) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    return (
        <Container>
            <InputField
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor={theme.COLORS.GRAY_300}
                isFocused={isFocused}
                hasContent={!!value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
            />
        </Container>
    );
}
