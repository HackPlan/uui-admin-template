import container from '../inversify.config';

type Class = { new(...args: any[]): any };

export function useInject<T extends Class>(type: T): InstanceType<T> {
  return container.get<T>(type.name) as InstanceType<T>;
}