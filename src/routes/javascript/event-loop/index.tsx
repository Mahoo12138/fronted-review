import { createFileRoute } from "@tanstack/react-router";
import JsEventLoopTutorial from "@/pages/javascript/event-loop";

export const Route = createFileRoute("/javascript/event-loop/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <JsEventLoopTutorial />;
}
