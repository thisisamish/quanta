import { createContext, Dispatch, SetStateAction } from 'react';

export const AuthContext = createContext<{
	username: string;
	setUsername: Dispatch<SetStateAction<string>>;
	password: string;
	setPassword: Dispatch<SetStateAction<string>>;
}>({
	username: '',
	setUsername: () => {},
	password: '',
	setPassword: () => {},
});
