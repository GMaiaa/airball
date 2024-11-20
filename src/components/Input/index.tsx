import { TextInputProps } from "react-native";
import {
    InputTypeStyleProps,
    Container,
    InputField,
    Label,
    PickerContainer,
    FormControlError,
    FormControlErrorText
} from "./styles";
import theme from "@theme/index";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';

type Props = TextInputProps & {
    placeholder: string;
    label: string;
    type?: InputTypeStyleProps;
    hasContent?: any;
    isTextarea?: boolean;
    options?: string[];
    errorMessage?: string | null;
    isInvalid?: boolean;
    isReadOnly?: boolean;
    onChange?: (value: string) => void;
};

export function Input({
    placeholder,
    label,
    type = 'DEFAULT',
    isTextarea = false,
    options = [],
    errorMessage,
    onChange,
    ...rest
}: Props) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleValueChange = (itemValue: string) => {
        setValue(itemValue);
        if (onChange) {
            onChange(itemValue);
        }
    };

    return (
        <Container>
            <Label>{label}</Label>
            {options.length > 0 ? (
                <PickerContainer>
                    <Picker
                        selectedValue={value}
                        onValueChange={handleValueChange}
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
                    isInvalid={!!errorMessage}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    multiline={isTextarea}
                    numberOfLines={isTextarea ? 4 : 1}
                    isTextarea={isTextarea}
                    {...rest}
                />
            )}
            {errorMessage && (
                <FormControlError>
                    <FormControlErrorText>{errorMessage}</FormControlErrorText>
                </FormControlError>
            )}
        </Container>
    );
}
