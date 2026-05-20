export interface JwtPayload {
  sub: string;
  email: string;
  tenantId: string;
}

export interface Internship {
  id: string;
  title: string;
  description: string;
  tenantId: string;
}
