import React from 'react';
import { TextInput } from 'react-native-paper';

const Input = React.memo(({ label, value, setState, ...props }) => {
    // Extrai o valor de 'conforme' se estiver disponível, senão usa o próprio value
    // Posso utilizar essa mesma logica do in quando eu tiver tratando a img.
    const displayValue = (typeof value === 'object' && value !== null && 'conforme' in value)
        ? (value.conforme !== null ? String(value.conforme) : null)
        : (value !== null ? String(value) : null);

    const handleChangeText = (text) => {
        setState(text);
    };

    return (
        <TextInput
            mode="outlined"
            style={{ marginBottom: 4 }}
            label={label}
            value={displayValue}
            onChangeText={handleChangeText}
            {...props}
        />
    );
});

export default Input;
