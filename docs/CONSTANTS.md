# Installation Constants

This document defines constants used throughout the application following US industry standards.

## API Endpoints

```javascript
// Base URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

// Endpoints
const ENDPOINTS = {
  LEADS: '/lead-publico/',
  SERVICES: '/servicos/',
  SERVICE_BY_ID: (id) => `/servicos/${id}/`,
};
```

## HTTP Status Codes

```javascript
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
```

## UI Constants

```javascript
// Breakpoints (px) - matches Tailwind defaults
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Animation Durations (ms)
const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
};

// Z-Index Scale
const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};
```

## Validation Rules

```javascript
// Regex Patterns
const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_BR: /^\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4}$/,
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
};

// Field Length Limits
const FIELD_LIMITS = {
  NAME_MIN: 2,
  NAME_MAX: 100,
  EMAIL_MAX: 255,
  MESSAGE_MIN: 10,
  MESSAGE_MAX: 1000,
  PHONE_MIN: 10,
  PHONE_MAX: 15,
};
```

## Error Messages

```javascript
const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  MIN_LENGTH: (min) => `Must be at least ${min} characters`,
  MAX_LENGTH: (max) => `Must be no more than ${max} characters`,
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  GENERIC_ERROR: 'An error occurred. Please try again.',
};
```

## Local Storage Keys

```javascript
const STORAGE_KEYS = {
  USER_PREFERENCES: 'fctec_user_preferences',
  THEME: 'fctec_theme',
  LANGUAGE: 'fctec_language',
  LAST_VISIT: 'fctec_last_visit',
};
```

## Feature Flags

```javascript
const FEATURES = {
  ANALYTICS: import.meta.env.VITE_FEATURE_ANALYTICS === 'true',
  CHAT: import.meta.env.VITE_FEATURE_CHAT === 'true',
  DEBUG: import.meta.env.VITE_DEBUG === 'true',
};
```

## Color Palette

```javascript
// Primary Colors
const COLORS = {
  primary: {
    50: '#f6fafe',
    100: '#ecf5fa',
    500: '#85b5d5',
    700: '#4e83af',
    900: '#2d4a61',
  },
  // ... other colors
};
```

## Usage

To use these constants in your components:

```javascript
import { API_BASE_URL, ENDPOINTS, HTTP_STATUS } from '@/utils/constants';

// Use in API calls
const response = await fetch(`${API_BASE_URL}${ENDPOINTS.LEADS}`);
if (response.status === HTTP_STATUS.OK) {
  // Handle success
}
```

## Best Practices

1. **Never hardcode values** - Always use constants
2. **Export all constants** - Make them available throughout the app
3. **Document changes** - Update this file when adding new constants
4. **Use descriptive names** - Make constants self-documenting
5. **Group related constants** - Keep organization logical
6. **Use TypeScript** - Consider converting to TypeScript for type safety

## Naming Conventions

- Use `UPPER_SNAKE_CASE` for constants
- Use descriptive names that clearly indicate purpose
- Prefix related constants (e.g., `API_`, `ERROR_`, `STORAGE_`)
- Use enums for related values
- Keep constants DRY (Don't Repeat Yourself)
