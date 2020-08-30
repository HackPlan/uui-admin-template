import container from '../inversify.config';

export function useInject<T extends { new(...args: any[]): any }>(type: T): InstanceType<T> {
  return container.get<T>(type) as InstanceType<T>;
}
