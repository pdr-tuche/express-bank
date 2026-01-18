import { Server } from "./Server";
import { AppConfig } from "./AppConfig";

export class Application {
  private server: Server;

  constructor() {
    const port = AppConfig.getPort();
    this.server = new Server(port);
  }

  run(): void {
    try {
      this.server.start();
    } catch (error) {
      console.error("❌ Error starting application:", error);
      process.exit(1);
    }
  }

  getServer(): Server {
    return this.server;
  }
}
