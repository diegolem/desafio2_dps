import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import formStyles from '../utils/formStyles';
import Result from '../components/Result';

export default function Factorial() {
    const [result, setResult] = useState(null);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            let total = 1;
            for (let i = 1; i <= formData.first_num; i++) {
                total = total * i;
            }

            setResult(parseFloat(total));
        }
    })

    return (
        <>
            <View>
                <TextInput
                    label="Numero para sacar factorial"
                    style={formStyles.input}
                    onChangeText={(text) => formik.setFieldValue("first_num", text)}
                    value={formik.values.first_num}
                    error={formik.errors.first_num}
                />
                <Button
                    mode="contained"
                    style={formStyles.btnSuccess}
                    onPress={formik.handleSubmit}
                >Calcular</Button>
            </View>
            <View>
                {result && (
                    <Result finalResult={result} error={null} />
                )}
            </View>
        </>
    )
}

function initialValues() {
    return {
        first_num: ""
    }
}

function validationSchema() {
    return {
        first_num: Yup.number().moreThan(0).required(true)
    }
}
