import { render, screen } from '@testing-library/react';
import React from 'react';
import { Badge } from './Badge';
import { TestProviders } from '../../utils/testProviders';

describe('Badge testing', () => {
  test('should be in the document', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" />
      </TestProviders>,
    );

    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });
});
