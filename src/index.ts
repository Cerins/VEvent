import { VEventTarget, VEvent } from './vanillaEvent';

declare global {function publishToGlobal(assets: Record<string, unknown>):void;}
global.publishToGlobal({
  VEventTarget,
  VEvent,
});
