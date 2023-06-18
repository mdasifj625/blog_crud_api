import winston from 'winston'

export const Logger = winston.createLogger({
  exitOnError: false,
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.label({ label: '' }),
    winston.format.timestamp({ format: 'YY-MM-DD HH:MM:ss' }),
    winston.format.printf(
      (log) =>
        ` ${log.label}  ${log.timestamp}  ${log.level} : ${log.message} ${
          log.stack ?? ''
        }`
    )
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true })),
      level: 'info',
    }),
  ].filter((e) => e != undefined),
})
