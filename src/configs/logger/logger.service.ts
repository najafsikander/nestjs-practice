import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  constructor() {
    super({
      prefix: 'NestJs-Practice',
      timestamp: true,
      logLevels: ['log', 'fatal', 'error', 'warn', 'debug', 'verbose'],
      compact: true,
    });
  }

  log(message: string): void {
    super.log(message);
  }

  fatal(message: string): void {
    super.fatal(message);
  }

  error(message: string): void {
    super.fatal(message);
  }

  warn(message: string): void {
    super.fatal(message);
  }

  debug(message: string): void {
    super.fatal(message);
  }

  verbose(message: string): void {
    super.fatal(message);
  }
}
