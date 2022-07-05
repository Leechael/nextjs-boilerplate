type LiteralLogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'log'
type LogLevel = keyof Console & LiteralLogLevel

export default function createLogger(namespace: string = 'root', level: LogLevel = 'log') {
  const method = console[level]
  return function logger(...args: any[]) {
    const now = new Date()
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    method(`[${time}] [${namespace}]`, ...args)
  }
}