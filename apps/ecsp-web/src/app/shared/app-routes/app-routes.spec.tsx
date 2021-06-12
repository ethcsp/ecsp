import { render } from '@testing-library/react';

import AppRoutes from './app-routes';

describe('AppRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
