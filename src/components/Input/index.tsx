import { TextInputProps } from "react-native";
import { InputTypeStyleProps, Container, InputField, Label, PickerContainer } from "./styles"; // Adicione o PickerContainer aos seus estilos
import theme from "@theme/index";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker'; // Certifique-se de instalar @react-native-picker/picker

type Props = TextInputProps & {
    placeholder: string;
    label: string;
    type?: InputTypeStyleProps;
    hasContent?: any;
    isTextarea?: boolean; 
    options?: string[]; 
};

export function Input({ placeholder, label, type = 'DEFAULT', isTextarea = false, options = [], ...rest }: Props) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    return (
        <Container>
            <Label>{label}</Label>
            {options.length > 0 ? (
                <PickerContainer>
                    <Picker
                        selectedValue={value}
                        onValueChange={(itemValue) => setValue(itemValue)}
                        style={{ color: theme.COLORS.GRAY_100 }}
                    >
                        <Picker.Item label={placeholder} value="" />
                        {options.map((option, index) => (
                            <Picker.Item key={index} label={option} value={option} />
                        ))}
                    </Picker>
                </PickerContainer>
            ) : (
                <InputField
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    placeholderTextColor={theme.COLORS.GRAY_300}
                    isFocused={isFocused}
                    hasContent={!!value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    multiline={isTextarea}
                    numberOfLines={isTextarea ? 4 : 1}
                    isTextarea={isTextarea}
                    {...rest}
                />
            )}
            <Label> {label} </Label>
            <InputField
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor={theme.COLORS.GRAY_300}
                isFocused={isFocused}
                hasContent={!!value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                keyboardAppearance="dark"
                {...rest}
            />
        </Container>
    );
}
