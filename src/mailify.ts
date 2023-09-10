/**
 * 
 * @param email The email we want to check if its disposed or not
 * @returns A boolean "true" or "false" depending on if the email is disposed or not
 */
export async function disposable(email: string): Promise<unknown> {
    const url = `https://open.kickbox.com/v1/disposable/${email}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}