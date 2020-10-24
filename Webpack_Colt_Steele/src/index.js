import { run } from "./app/app";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
import "./boot.scss";
import "./main.css"; //order matters here. The LAST line to be imported is the one that's APPLIED ON TOP

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);

console.log("hello from webpack!");


