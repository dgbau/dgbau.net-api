export interface ServerSettings {
  port: number | string;
}

export const serverSettings: ServerSettings = {
  port: process.env.PORT || '3000',
};
