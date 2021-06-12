import { render } from '@testing-library/react';

import WebLayout from './web-layout';

describe('WebLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLayout />);
    expect(baseElement).toBeTruthy();
  });
});
