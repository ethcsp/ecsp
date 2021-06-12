/* eslint-disable prefer-rest-params */
export class LoggerService {
  environment: any;

  get debugMode(): any {
    this.environment = window['__env'];
    return this.environment?.debug ?? false;
  }

  // tslint:disable-next-line: ban-types
  public get log(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.log.bind(window.console) : (): void => {};
  }
  public get debug(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.debug.bind(window.console) : (): void => {};
  }
  public get info(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.info.bind(window.console) : (): void => {};
  }
  public get warn(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.warn.bind(window.console) : (): void => {};
  }

  public get error(): any {
    if (window['__env']?.production) {
      const original = window.console['error'];
      console['error'] = function () {
        // do external logging

        if (arguments?.[0]) {
          logToServer(arguments[0]);
        }

        if (original.apply) {
          // Do this for normal browsers
          original.apply(original, arguments);
        } else {
          // Do this for IE
          const message = Array.prototype.slice.apply(arguments).join(' ');
          original(message);
        }
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.error.bind(window.console) : (): void => {};
  }

  public get table(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.table.bind(window.console) : (): void => {};
  }
}

export const logger = new LoggerService();

export const logToServer = (error) => {
  if (!Object.keys(error).length) return;
  const env = window['__env'];

  const errorPrep = {
    error,
    env,
    user: JSON.parse(localStorage.getItem('user') ?? '{}'),
    userAgent: navigator.userAgent,
    currentUrl: window.location.href,
    time: new Date(),
    history: document.referrer,
    windowWidth:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    windowHeight:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
  };

  const logServer = env?.urls?.logServer;
  if (logServer) {
    fetch(logServer, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorPrep),
    });
  }
};
