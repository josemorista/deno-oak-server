import { User } from './User.ts';

export class Person extends User {

	firstname: string;
	lastname: string;

	birthDate?: Date;

	constructor(data: Omit<Person, 'createdAt' | 'updatedAt' | 'avatar' | 'birthDate'>, createdAt?: Date) {
		super(data, createdAt);

		this.firstname = data.firstname;
		this.lastname = data.lastname;
	}

}