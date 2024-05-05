export function hey(message: string): string {
    message = message.trim();

    const isQuestion = message.endsWith("?");
    const isShouting =
        message.toUpperCase() === message && message.toLowerCase() != message;

    if (message === "") return "Fine. Be that way!";
    if (isShouting && isQuestion) return "Calm down, I know what I'm doing!";
    if (isShouting) return "Whoa, chill out!";
    if (isQuestion) return "Sure.";
    else return "Whatever.";
}
