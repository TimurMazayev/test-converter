import Messages from "./messages";

export const lengthValidation = (value) => {
    const length = /[^a-zA-Z0-9]|(.*\s)/g;
    if(length.test(value)) return undefined
    return Messages.Errors.IncorrectData
}
