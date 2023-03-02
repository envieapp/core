import { render, screen } from '@testing-library/react';
import React from 'react';
import { Fab } from './Fab';
import { TestProviders } from '../../utils/testProviders';

describe('Fab testing', () => {
  test('should be in the document', () => {
    render(
      <TestProviders>
        <Fab data-testid="fab" />
      </TestProviders>,
    );

    expect(screen.getByTestId('fab')).toBeInTheDocument();
  });
});
