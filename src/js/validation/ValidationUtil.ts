export const isBlank = (str: string) => {
    //if(!str) return false;

    return !str || str.trim() === '';
}