export class User {
  readonly id: number;
  email: string;
  password: string;
  type: "person" | "enterprise";

  createdAt: Date;
  updatedAt: Date;

  avatar: string | null;

  constructor(
    data: Omit<User, "createdAt" | "updatedAt" | "avatar">,
    createdAt?: Date,
  ) {
    this.id = data.id;
    this.type = data.type;
    this.email = data.email, this.password = data.password;
    this.avatar = null;

    const now = new Date();

    this.createdAt = createdAt || now;
    this.updatedAt = createdAt || now;
  }
}
