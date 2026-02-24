/**
 * Logger utility for consistent logging across the application
 * Automatically disabled in production builds
 */

const isDevelopment = import.meta.env.MODE === 'development';
const isDebugEnabled = import.meta.env.VITE_DEBUG === 'true';

const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
};

const LOG_STYLES = {
  error: 'color: #ff4444; font-weight: bold;',
  warn: 'color: #ffaa00; font-weight: bold;',
  info: 'color: #4183c4; font-weight: bold;',
  debug: 'color: #999999;',
  success: 'color: #00aa44; font-weight: bold;',
};

/**
 * Create a namespaced logger
 * @param {string} namespace - The namespace for this logger
 * @returns {Object} Logger instance
 */
export const createLogger = (namespace) => {
  const formatMessage = (level, ...args) => {
    const timestamp = new Date().toISOString();
    return [`[${timestamp}] [${namespace}] [${level.toUpperCase()}]`, ...args];
  };

  return {
    /**
     * Log error messages - always enabled
     */
    error: (...args) => {
      // eslint-disable-next-line no-console
      console.error(...formatMessage(LOG_LEVELS.ERROR, ...args));
    },

    /**
     * Log warning messages - always enabled
     */
    warn: (...args) => {
      // eslint-disable-next-line no-console
      console.warn(...formatMessage(LOG_LEVELS.WARN, ...args));
    },

    /**
     * Log info messages - development only
     */
    info: (...args) => {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.info(...formatMessage(LOG_LEVELS.INFO, ...args));
      }
    },

    /**
     * Log debug messages - development only with debug flag
     */
    debug: (...args) => {
      if (isDevelopment && isDebugEnabled) {
        // eslint-disable-next-line no-console
        console.log(...formatMessage(LOG_LEVELS.DEBUG, ...args));
      }
    },

    /**
     * Log success messages - development only
     */
    success: (...args) => {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.log(
          `%c${formatMessage('SUCCESS', ...args).join(' ')}`,
          LOG_STYLES.success
        );
      }
    },

    /**
     * Log API requests
     */
    request: (method, url, data) => {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.log(
          `%c📤 ${method.toUpperCase()} ${url}`,
          LOG_STYLES.info,
          data || ''
        );
      }
    },

    /**
     * Log API responses
     */
    response: (status, data) => {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.log(`%c✅ Response ${status}`, LOG_STYLES.success, data);
      }
    },

    /**
     * Group related logs
     */
    group: (label, callback) => {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.group(`[${namespace}] ${label}`);
        callback();
        // eslint-disable-next-line no-console
        console.groupEnd();
      }
    },

    /**
     * Log execution time of a function
     */
    time: (label) => {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.time(`[${namespace}] ${label}`);
      }
    },

    timeEnd: (label) => {
      if (isDevelopment) {
        // eslint-disable-next-line no-console
        console.timeEnd(`[${namespace}] ${label}`);
      }
    },
  };
};

/**
 * Default logger instance
 */
export const logger = createLogger('App');

export default logger;
