/**
 * T - Type from backend,
 * K - Type after serialization
 */
export abstract class AbstractSerializer<
  T extends Record<string, unknown>,
  M extends Record<string, unknown>,
> {
  /**
   * Parse a payload into request type
   * @param payload
   */
  abstract parse<P, R>(payload: P): R;
  /**
   * Serialize response to a model
   * @param response
   */
  abstract serialize(response: T): M;
}
