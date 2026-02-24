# Coding Standards

This document outlines the coding standards and best practices for the FCTEC Site project, following US industry standards.

## Table of Contents

- [General Principles](#general-principles)
- [JavaScript Standards](#javascript-standards)
- [React Standards](#react-standards)
- [CSS Standards](#css-standards)
- [File Organization](#file-organization)
- [Naming Conventions](#naming-conventions)
- [Comments and Documentation](#comments-and-documentation)
- [Error Handling](#error-handling)
- [Testing](#testing)

## General Principles

### SOLID Principles

- **Single Responsibility**: Each module should have one reason to change
- **Open/Closed**: Open for extension, closed for modification
- **Liskov Substitution**: Subtypes must be substitutable for their base types
- **Interface Segregation**: Many specific interfaces over one general interface
- **Dependency Inversion**: Depend on abstractions, not concretions

### DRY (Don't Repeat Yourself)

Avoid code duplication. Extract common logic into reusable functions or components.

```javascript
// ❌ Bad
function calculateAreaCircle(radius) {
  return 3.14159 * radius * radius;
}
function calculateAreaSphere(radius) {
  return 4 * 3.14159 * radius * radius;
}

// ✅ Good
const PI = 3.14159;
function calculateCircleArea(radius) {
  return PI * radius * radius;
}
function calculateSphereArea(radius) {
  return 4 * PI * radius * radius;
}
```

### KISS (Keep It Simple, Stupid)

Write simple, readable code. Avoid over-engineering.

```javascript
// ❌ Bad - Over-engineered
const isEven = (num) => (num % 2 === 0 ? true : false);

// ✅ Good - Simple
const isEven = (num) => num % 2 === 0;
```

### YAGNI (You Aren't Gonna Need It)

Don't implement features until you need them.

## JavaScript Standards

### Variables

```javascript
// ✅ Use const by default
const MAX_USERS = 100;
const apiUrl = 'https://api.example.com';

// ✅ Use let when reassignment is needed
let counter = 0;
counter += 1;

// ❌ Never use var
var oldStyle = 'avoid this';
```

### Functions

```javascript
// ✅ Use arrow functions for simple operations
const double = (x) => x * 2;

// ✅ Use named functions for complex logic
function calculateTotalPrice(items, taxRate) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

// ✅ Use async/await instead of promises
async function fetchUserData(userId) {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    logger.error('Failed to fetch user:', error);
    throw error;
  }
}
```

### Destructuring

```javascript
// ✅ Use object destructuring
const { firstName, lastName, email } = user;

// ✅ Use array destructuring
const [first, second, ...rest] = array;

// ✅ Use destructuring in function parameters
function renderUser({ name, email, role }) {
  return `${name} (${email}) - ${role}`;
}
```

### Template Literals

```javascript
// ❌ Bad - String concatenation
const greeting = 'Hello, ' + firstName + ' ' + lastName + '!';

// ✅ Good - Template literals
const greeting = `Hello, ${firstName} ${lastName}!`;
```

### Object and Array Methods

```javascript
// ✅ Use modern array methods
const activeUsers = users.filter((user) => user.isActive);
const userNames = users.map((user) => user.name);
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// ✅ Use spread operator
const newUser = { ...user, lastLogin: new Date() };
const allItems = [...items1, ...items2];

// ✅ Use optional chaining
const street = user?.address?.street;
```

## React Standards

### Component Structure

```javascript
// ✅ Functional components with hooks
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * UserProfile component displays user information
 * @param {Object} props - Component props
 * @param {Object} props.user - User object
 * @param {Function} props.onUpdate - Callback when user is updated
 */
function UserProfile({ user, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Side effects here
  }, [user]);

  return <div className="user-profile">{/* Component JSX */}</div>;
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func,
};

UserProfile.defaultProps = {
  onUpdate: () => {},
};

export default UserProfile;
```

### Hooks

```javascript
// ✅ Custom hooks for reusable logic
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// ✅ Use hooks consistently
function Component() {
  // 1. State hooks
  const [value, setValue] = useState(0);

  // 2. Effect hooks
  useEffect(() => {
    // Effect logic
  }, []);

  // 3. Custom hooks
  const size = useWindowSize();

  // 4. Derived values
  const doubled = useMemo(() => value * 2, [value]);

  // 5. Callbacks
  const handleClick = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  // 6. Render
  return <div>{value}</div>;
}
```

### Performance Optimization

```javascript
// ✅ Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
});

// ✅ Use useMemo for expensive calculations
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.value - b.value);
}, [items]);

// ✅ Use useCallback for stable function references
const handleSubmit = useCallback(
  (event) => {
    event.preventDefault();
    onSubmit(formData);
  },
  [formData, onSubmit]
);
```

### Conditional Rendering

```javascript
// ✅ Use && for simple conditionals
{
  isLoading && <LoadingSpinner />;
}

// ✅ Use ternary for if/else
{
  isLoggedIn ? <Dashboard /> : <Login />;
}

// ✅ Extract complex conditions
const shouldShowBanner = isLoggedIn && hasNotifications && !isDismissed;
{
  shouldShowBanner && <NotificationBanner />;
}
```

## CSS Standards

### Tailwind CSS

```javascript
// ✅ Use Tailwind utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h2 className="text-xl font-bold text-gray-900">Title</h2>
  <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
    Click
  </button>
</div>;

// ✅ Extract repeated patterns into components
function Card({ children }) {
  return <div className="p-4 bg-white rounded-lg shadow">{children}</div>;
}
```

### Custom CSS

```css
/* ✅ Use BEM methodology */
.card {
  /* Block */
}

.card__header {
  /* Element */
}

.card--featured {
  /* Modifier */
}

/* ✅ Mobile-first approach */
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* ✅ Use CSS custom properties */
:root {
  --color-primary: #4e83af;
  --spacing-unit: 8px;
}

.button {
  color: var(--color-primary);
  padding: calc(var(--spacing-unit) * 2);
}
```

## File Organization

### Component Files

```
ComponentName/
├── ComponentName.jsx      # Component logic
├── ComponentName.css      # Component styles
├── ComponentName.test.js  # Component tests
└── index.js              # Export (optional)
```

### Import Order

```javascript
// 1. External dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// 2. Internal dependencies (absolute imports)
import { api } from '@/services/api';
import { logger } from '@/utils/logger';

// 3. Relative imports
import { Button } from '../Button';
import { useAuth } from '../../hooks/useAuth';

// 4. Styles
import './ComponentName.css';

// 5. Assets
import logo from '../../assets/logo.png';
```

## Naming Conventions

### Files and Folders

- **Components**: `PascalCase` (e.g., `UserProfile.jsx`)
- **Utilities**: `camelCase` (e.g., `formatDate.js`)
- **Constants**: `UPPER_SNAKE_CASE` for file, `camelCase` for ES modules (e.g., `apiConstants.js`)
- **Hooks**: `camelCase` starting with `use` (e.g., `useAuth.js`)

### Variables and Functions

```javascript
// ✅ Use camelCase for variables and functions
const userName = 'John Doe';
function calculateTotal(items) {}

// ✅ Use PascalCase for classes and components
class UserService {}
function UserProfile() {}

// ✅ Use UPPER_SNAKE_CASE for constants
const MAX_RETRY_ATTEMPTS = 3;
const API_TIMEOUT = 5000;

// ✅ Boolean variables start with is, has, should
const isActive = true;
const hasPermission = false;
const shouldRender = true;
```

## Comments and Documentation

### JSDoc Comments

```javascript
/**
 * Calculates the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate (e.g., 0.08 for 8%)
 * @returns {number} The total price with tax
 * @throws {Error} If price or taxRate is negative
 * @example
 * calculatePriceWithTax(100, 0.08) // returns 108
 */
function calculatePriceWithTax(price, taxRate) {
  if (price < 0 || taxRate < 0) {
    throw new Error('Price and tax rate must be positive');
  }
  return price * (1 + taxRate);
}
```

### Inline Comments

```javascript
// ❌ Bad - Obvious comment
const x = x + 1; // Increment x

// ✅ Good - Explains why
const x = x + 1; // Offset by 1 to match 1-based indexing

// ✅ Good - Explains complex logic
// Use binary search since array is sorted
// This reduces time complexity from O(n) to O(log n)
const index = binarySearch(sortedArray, target);
```

## Error Handling

### Try-Catch Blocks

```javascript
// ✅ Specific error handling
async function fetchData() {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      logger.warn('Data not found:', error);
      return null;
    }
    logger.error('Failed to fetch data:', error);
    throw error;
  }
}
```

### Error Boundaries (React)

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logger.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

## Testing

### Unit Tests

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('should render initial count', () => {
    render(<Counter initialCount={0} />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('should increment count on button click', () => {
    render(<Counter initialCount={0} />);
    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
```

## Checklist for Code Review

- [ ] Code follows the style guide
- [ ] Variables and functions have meaningful names
- [ ] No console.log statements (use logger)
- [ ] No `var` declarations
- [ ] PropTypes or TypeScript types are defined
- [ ] Complex logic has comments
- [ ] No code duplication (DRY)
- [ ] Error handling is implemented
- [ ] Performance considerations addressed
- [ ] Accessibility requirements met
- [ ] Tests are written and passing
- [ ] Documentation is updated

## Resources

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [React Documentation](https://react.dev/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
