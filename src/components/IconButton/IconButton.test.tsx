import { render, screen } from '@testing-library/react';
import React from 'react';
import { IconButton } from './IconButton';
import { TestProviders } from '../../utils/testProviders';

describe('IconButton testing', () => {
  test('should be in the document', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    expect(screen.getByTestId('iconButton')).toBeInTheDocument();
  });

  // TODO variants, color and selected tests
});
