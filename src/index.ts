import { VEventTarget, VEvent } from "./vanillaEvent";

declare global {function publishToGlobal(assets: Object):void}
global.publishToGlobal({
    VEventTarget,
    VEvent
}); 