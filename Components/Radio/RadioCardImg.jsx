import React from 'react';
import { Text, Card, RadioButton } from 'react-native-paper';
import ImgPicker from '../ImgPicker/ImgPicker';
import { View, StyleSheet } from 'react-native';
import Input from '../Input/Input';

const RadioCardImg = React.memo(({ label, state, setState, type }) => {

    const inputProps = { keyboardType: 'numeric' };

    return (
        <Card style={{ marginTop: 4, marginBottom: 4 }}>
            <Card.Content>
                <Text variant="titleMedium" style={styles.textLabel}>{label}</Text>
                {type === 'checkbox' || type === 'img/checkbox' ? (
                    <View>
                        <View style={styles.containerRadio}>
                            <RadioButton.Item
                                label="Sim"
                                value="true"
                                status={state.conforme === true ? 'checked' : 'unchecked'}
                                onPress={() => setState({ ...state, conforme: true })}
                            />
                            <RadioButton.Item
                                label="Não"
                                value="false"
                                status={state.conforme === false ? 'checked' : 'unchecked'}
                                onPress={() => setState({ ...state, conforme: false })}
                            />
                        </View>
                        {type === 'img/checkbox' && (
                            <ImgPicker state={state} setState={setState} />
                        )}
                    </View>
                ) : (
                    <View>
                        <View style={styles.containerInput}>
                            <Input
                                label={label}
                                value={state}
                                setState={(v) => { setState({ ...state, conforme: v }) }}

                                {...inputProps}
                            />
                            <ImgPicker state={state} setState={setState} />
                        </View>
                    </View>
                )}
            </Card.Content>
        </Card>
    );
});

export default RadioCardImg;

const styles = StyleSheet.create({
    textLabel: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    containerRadio: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
