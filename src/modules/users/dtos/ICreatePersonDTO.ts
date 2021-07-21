import { Person } from "../entities/Person.ts";

export type ICreatePersonDTO = Omit<
  Person,
  "id" | "createdAt" | "updatedAt" | "birthDate" | "avatar" | "type"
>;
