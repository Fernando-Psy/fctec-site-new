# Architecture Overview

This document provides a high-level overview of the FCTEC Site architecture following modern US industry standards.

## Technology Stack

### Frontend

- **React 18**: UI library with hooks and functional components
- **Vite**: Build tool and development server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Bootstrap 5**: Component library
- **Axios**: HTTP client for API communication

### Development Tools

- **ESLint**: Static code analysis
- **Prettier**: Code formatting
- **TypeScript**: Type checking (configured but not fully implemented)

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # React components (organized by feature)
├── hooks/          # Custom React hooks
├── services/       # API services and external integrations
├── styles/         # Global styles and CSS modules
├── utils/          # Utility functions and helpers
├── App.jsx         # Main application component
└── main.jsx        # Application entry point
```

## Design Patterns

### Component Architecture

We follow a **component-based architecture** with these principles:

1. **Single Responsibility**: Each component has one clear purpose
2. **Composition over Inheritance**: Build complex UIs from simple components
3. **Container/Presenter Pattern**: Separate logic from presentation
4. **Custom Hooks**: Extract reusable logic into hooks

### Component Types

```
components/
├── Feature/           # Feature-specific components
│   ├── Feature.jsx   # Main component
│   ├── Feature.css   # Component styles
│   └── ...           # Related components
```

### State Management

- **Local State**: `useState` for component-level state
- **Derived State**: `useMemo` for computed values
- **Side Effects**: `useEffect` for data fetching and subscriptions
- **Context API**: For sharing state across components (when needed)

### Data Flow

```
User Interaction → Event Handler → State Update → Re-render
                                                    ↓
                                              Virtual DOM Diff
                                                    ↓
                                              DOM Update
```

## API Integration

### Architecture

```
Component → Service → Axios → Backend API
              ↓
           Logger
```

### Service Layer

All API calls go through the service layer (`src/services/api.js`):

```javascript
// Centralized API configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptors for logging and error handling
api.interceptors.request.use(onRequest, onError);
api.interceptors.response.use(onSuccess, onError);
```

### Error Handling

```
API Error → Interceptor → Logger → Component
                           ↓
                     Error State
                           ↓
                    User Feedback
```

## Performance Optimization

### Code Splitting

```javascript
// Route-based code splitting
const AboutCompany = lazy(() => import('./components/AboutCompany'));

// Component wrapped in Suspense
<Suspense fallback={<LoadingFallback />}>
  <AboutCompany />
</Suspense>;
```

### Asset Optimization

1. **Image Optimization**: WebP format with fallbacks
2. **CSS Optimization**: Critical CSS inline, lazy load non-critical
3. **JavaScript**: Code splitting, tree shaking, minification
4. **Compression**: Brotli and Gzip for all assets

### Caching Strategy

```
Browser Cache → CDN Cache → Server
      ↓            ↓          ↓
   Assets      Static      Dynamic
   (1 year)    (1 week)    (No cache)
```

## Routing Architecture

```javascript
<Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/service/:id" element={<ServiceDetails />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
```

### Route Structure

- `/` - Home page
- `/service/:id` - Service details
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## SEO Architecture

### Meta Tags Strategy

```javascript
<SEO
  title="Page Title"
  description="Page description"
  canonical="https://example.com/page"
  openGraph={{
    type: 'website',
    title: 'OG Title',
    description: 'OG Description',
    image: 'https://example.com/og-image.jpg',
  }}
/>
```

### Structured Data

- Organization Schema
- Service Schema
- BreadcrumbList Schema

## Security

### Content Security Policy

```html
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests"
/>
```

### Input Validation

- Client-side validation with regex patterns
- Server-side validation (API responsibility)
- Sanitization of user inputs

### Environment Variables

- Never commit secrets
- Use `.env` files (git-ignored)
- Type-safe access with defaults

## Build Process

### Development

```bash
npm run dev
```

1. Vite starts dev server
2. Hot Module Replacement (HMR) enabled
3. Source maps generated
4. No minification

### Production

```bash
npm run build
```

1. TypeScript type checking
2. ESLint validation
3. Build optimization
   - Tree shaking
   - Code splitting
   - Minification (Terser)
   - Asset optimization
4. Generate compressed assets (.br, .gz)
5. Output to `dist/`

## Deployment

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── index.html
```

### Deployment Checklist

- [ ] Run tests
- [ ] Build production bundle
- [ ] Verify environment variables
- [ ] Check bundle size
- [ ] Test build locally
- [ ] Deploy to staging
- [ ] Run E2E tests
- [ ] Deploy to production
- [ ] Verify deployment
- [ ] Monitor errors

## Monitoring & Logging

### Logger Utility

```javascript
import { createLogger } from '@/utils/logger';

const logger = createLogger('ComponentName');

logger.info('Info message');
logger.error('Error message');
logger.debug('Debug message'); // Only in dev + debug mode
```

### Analytics

- Google Analytics 4
- Page view tracking
- Event tracking
- Conversion tracking

## Best Practices

### Code Quality

1. **Consistent Formatting**: Use Prettier
2. **Linting**: Fix all ESLint errors
3. **Type Safety**: Add PropTypes or TypeScript
4. **Testing**: Write tests for critical paths
5. **Documentation**: Comment complex logic

### Performance

1. **Lazy Loading**: Split code by routes
2. **Memoization**: Use React.memo, useMemo, useCallback
3. **Image Optimization**: WebP, responsive images
4. **Bundle Size**: Monitor and optimize
5. **Core Web Vitals**: Optimize LCP, FID, CLS

### Accessibility

1. **Semantic HTML**: Use proper HTML elements
2. **ARIA Labels**: Add when needed
3. **Keyboard Navigation**: Ensure all interactive elements are accessible
4. **Color Contrast**: Meet WCAG AA standards
5. **Screen Reader Testing**: Test with screen readers

## Future Enhancements

### Planned Improvements

- [ ] Migrate to TypeScript
- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Implement CI/CD pipeline
- [ ] Add state management (Zustand/Redux)
- [ ] Implement PWA features
- [ ] Add internationalization (i18n)
- [ ] Performance monitoring (Web Vitals)
- [ ] Error tracking (Sentry)

## References

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Web.dev Best Practices](https://web.dev/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
