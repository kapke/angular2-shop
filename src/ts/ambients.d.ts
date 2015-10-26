//this file is needed only for silent tsc errors "cannot find module"
declare module 'reflect-metadata' {
}
declare module 'valid-url' {
	export function isUri (data:string):string;
}