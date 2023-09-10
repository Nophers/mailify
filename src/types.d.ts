export type DisposableType = (email: string) => Promise<boolean>;

export declare module "mailify" {
    export const disposable: DisposableType;
}