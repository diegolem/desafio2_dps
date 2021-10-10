import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import formStyles from '../utils/formStyles';
import Result from '../components/Result';

export default function Multiply() {
    const [result, setResult] = useState(null);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            setResult(parseFloat(formData.first_num) * parseFloat(formData.second_num));
        }
    })

    return (
        <>
            <View>
                <TextInput
                    label="Primer numero"
                    style={formStyles.input}
                    onChangeText={(text) => formik.setFieldValue("first_num", text)}
                    value={formik.values.first_num}
                    error={formik.errors.first_num}
                />
                <TextInput
                    label="Segundo numero"
                    style={formStyles.input}
                    onChangeText={(text) => formik.setFieldValue("second_num", text)}
                    value={formik.values.second_num}
                    error={formik.errors.second_num}
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
        first_num: "",
        second_num: ""
    }
}

function validationSchema() {
    return {
        first_num: Yup.number().required(true),
        second_num: Yup.number().required(true),
    }
}