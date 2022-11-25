export interface Project {
  description: string;
  gatewayIds: string[];
  image: string;
  industry: string;
  name: string;
  projectId: string;
  rule: string;
  structure: string;
  userIds: string[];
  website: string;
}

export interface Gateway {
  gatewayId: string;
  name: string;
  type: string;
  apiKey: string;
  secondaryApiKey: string;
  description: string;
}

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Payment {
  amount: number;
  created: string;
  gatewayId: string;
  modified: string;
  paymentId: string;
  projectId: string;
  userIds: string;
}

export interface ReportFilters {
  project: string;
  gateway: string;
  fromDate: Date;
  toDate: Date;
}
