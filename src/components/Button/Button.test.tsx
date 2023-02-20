import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import { TestProviders } from '../../utils/testProviders';

describe('Button testing', () => {
  test('should be in the document', () => {
    render(
      <TestProviders>
        <Button data-testid="button" />
      </TestProviders>,
    );

    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  // TODO variants and color tests
});
