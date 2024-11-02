import {
  InjectionToken,
  Provider,
  signal,
  WritableSignal,
} from '@angular/core';

type WeatherProviders = 'yandex' | 'accuweather' | 'gismeteo' | 'openweather';

export type WeatherProvider = WritableSignal<WeatherProviders>;

export const WEATHER_PROVIDER_TOKEN: InjectionToken<
  WritableSignal<WeatherProvider>
> = new InjectionToken<WeatherProvider>('Weather Provider Token');

export function provideWeatherProviderToken(): Provider {
  return {
    provide: WEATHER_PROVIDER_TOKEN,
    useValue: signal<WeatherProviders>('yandex'),
  };
}
