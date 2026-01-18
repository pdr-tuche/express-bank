export class AppConfig {
  private static readonly DEFAULT_PORT = 3000;

  static getPort(): number {
    const port = process.env.PORT || this.DEFAULT_PORT;
    return typeof port === "string" ? parseInt(port, 10) : port;
  }

  static getNodeEnv(): string {
    return process.env.NODE_ENV || "development";
  }

  static isDevelopment(): boolean {
    return this.getNodeEnv() === "development";
  }

  static isProduction(): boolean {
    return this.getNodeEnv() === "production";
  }
}
