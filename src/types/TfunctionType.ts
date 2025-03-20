export type TFunction = <T extends Record<string, unknown>>(key: string, params?: T) => string;
