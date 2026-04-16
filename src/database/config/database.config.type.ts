export type DatabaseConfig = {
  type?: string;
  host?: string;
  port?: number;
  password?: string;
  database?: string;
  username?: string;
  synchronize?: boolean;
  logNotifications?: boolean;
  logger?: string;
  logging?: boolean;
  // maxConnections: number;
  // sslEnabled?: boolean;
  // rejectUnauthorized?: boolean;
  // ca?: string;
  // key?: string;
  // cert?: string;
};
