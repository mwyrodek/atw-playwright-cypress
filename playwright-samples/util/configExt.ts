import { test as base } from '@playwright/test';

export type TestOptions = {
    apiUrl: string;
};

export const test = base.extend<TestOptions>({
    apiUrl: ['aaa', { option: true }],
});