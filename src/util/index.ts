/** Сократить email для ника пользователя если его нет */
export const sliceEmail = (email: string | null) => {
    return !email ? false : email.charAt(0).toUpperCase() + email.split('@')[0].slice(1)
}

/** Существует ли строка? Если нет, то возращает дефолтное значение */
export const stringExists = (item: string) => item && item !== "NaN" ? item : "Неизвестно";

/** Поиск определенного значения в строке */
export const searchValue = (value: string): string => {
    const start_pos = value.indexOf('search') + 7;
    const end_pos = value.indexOf('&', start_pos);
    const res = value.substring(start_pos, end_pos)
    if (res.indexOf('+') !== -1) {
        return res.replaceAll('+', ' ');
    }
    return value.substring(start_pos, end_pos)
}

