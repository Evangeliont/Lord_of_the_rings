export const errorMessageForm = (inputName: string, type: string) => {
  if (type === "minLength") {
    return `${inputName} is too short`;
  }
  if (type === "maxnLength") {
    return `${inputName} is too long`;
  }
  return "";
};
