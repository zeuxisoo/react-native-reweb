import { Alert } from 'react-native';

export function alertMessage(title, message) {
    Alert.alert(title, message);
}

export function alertError(message) {
    alertMessage("Error!", message);
}

export function alertSuccess(message) {
    alertMessage("Success!", message);
}

export function alertSystem(message) {
    alertMessage("System!", message);
}
