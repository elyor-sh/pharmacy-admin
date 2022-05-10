import { EncryptStorage } from 'encrypt-storage';

const secretKetStorage = process.env.REACT_APP_SECRET_KEY_STORAGE || 'secret_12398uyx'

export const encryptLocalStorage = new EncryptStorage(secretKetStorage);

export const encryptSessionStorage = new EncryptStorage(secretKetStorage, {
    storageType: 'sessionStorage'
});