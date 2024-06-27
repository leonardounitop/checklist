import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-paper';

function DateInput({ setDate }) {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        setShowPicker(false); // Fecha o picker após selecionar uma data/hora
        if (selectedDate) {
            setSelectedDateTime(selectedDate);
            console.log(selectedDate); // Aqui você pode fazer o que precisar com a data selecionada
        }
    };

    const showDatePicker = () => {
        setShowPicker(true); // Abre o picker quando o botão for pressionado
    };

    return (
        <View>

            <Button mode="contained" onPress={showDatePicker} style={{ marginTop: 12 }}>
                Selecionar Data
            </Button>
            {showPicker && (
                <DateTimePicker
                    value={selectedDateTime}
                    mode="date" // Define que queremos selecionar data e hora
                    is24Hour={true}
                    display='default'
                    onChange={handleDateChange}
                />
            )}
        </View>
    );
}

export default DateInput;
