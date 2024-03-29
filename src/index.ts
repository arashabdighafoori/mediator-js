import Mediator from "./mediator";

/**
 * A static instance of mediator.
 *
 * It has all of the features (event, cqrs, dependency injection, pipeline, stores).
 */
const MediatorInstance = (() => {
  Mediator.instance = Mediator.instance || new Mediator();
  return Mediator.instance;
})();

export { MediatorInstance as mediator };
