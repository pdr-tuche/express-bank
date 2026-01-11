import "tsconfig-paths/register";
import { Application } from "@infrastructure/config/app/Application";

const application = new Application();
application.run();

export default application.getServer().getApp();
