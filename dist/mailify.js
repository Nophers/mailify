"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disposable = void 0;
/**
 *
 * @param email The email we want to check if its disposed or not
 * @returns A boolean "true" or "false" depending on if the email is disposed or not
 */
async function disposable(email) {
    const url = `https://open.kickbox.com/v1/disposable/${email}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
exports.disposable = disposable;
