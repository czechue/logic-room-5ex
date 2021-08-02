import React, { ReactElement, useContext } from "react";
import { Container, interfaces } from "inversify";

const InversifyContext = React.createContext<{ container: Container | null }>({
  container: null,
});

type ProviderProps = {
  container: Container;
  children: ReactElement;
};

export const Provider = ({ container, children }: ProviderProps) => {
  return (
    <InversifyContext.Provider value={{ container }}>
      {children}
    </InversifyContext.Provider>
  );
};

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error();
  }
  return container.get<T>(identifier);
}

export type InjectConfig = Record<string, interfaces.ServiceIdentifier<any>>;

export type InjectableProps<T> = {
  [K in keyof T]: interfaces.ServiceIdentifier<any>;
};

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function withInjection<TInject, TProps = {}>(
  identifiers: InjectableProps<TInject>
) {
  return function (Component: (props: TInject & TProps) => JSX.Element) {
    return function (props: Omit<TProps, keyof InjectableProps<TInject>>): any {
      const { container } = useContext(InversifyContext);
      if (!container) {
        throw new Error();
      }

      let services: TInject = {} as any;

      for (const [key, value] of Object.entries(identifiers) as Entries<
        InjectableProps<TInject>
      >) {
        services[key] = container.get(value);
      }

      return <Component {...(props as TProps)} {...services} />;
    };
  };
}
