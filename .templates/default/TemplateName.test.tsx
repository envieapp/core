import { render, screen } from '@testing-library/react';
import React from 'react';
import { TemplateName } from './TemplateName';
import { TestProviders } from '../../utils/testProviders';

describe('TemplateName testing', () => {
  test('should be in the document', () => {
    render(
      <TestProviders>
        <TemplateName data-testid="templateName" />
      </TestProviders>,
    );

    expect(screen.getByTestId('templateName')).toBeInTheDocument();
  });
});
