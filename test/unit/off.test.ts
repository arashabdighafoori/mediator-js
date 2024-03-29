import { mediator } from "../../src";
import Container from "../../src/container";
import { Event } from "../../src/types";

let container: Container;
let counter = 0;
beforeEach(() => {
  container = mediator.container(`${counter++}`, true);
});

test("off should remove an entry", () => {
  const eventName = "EventName";
  container.on(
    eventName,
    function () {
      return;
    },
    1
  );

  let actual = container["store"].get(eventName) as {
    type: "event";
    value: Event<unknown>;
  };
  expect(actual).toBeDefined();
  container.off(eventName);
  actual = container["store"].get(eventName) as {
    type: "event";
    value: Event<unknown>;
  };
  expect(actual).not.toBeDefined();
});
