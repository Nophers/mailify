export type Disposable = (email: string) => Promise<boolean>;

export declare module "mailify" {
    export const disposable: Disposable;
}