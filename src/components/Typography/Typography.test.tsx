import { render, screen } from '@testing-library/react';
import React from 'react';
import { Typography } from './Typography';
import { TestProviders } from '../../utils/testProviders';

describe('Typography testing', () => {
  test('should be in the document', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(screen.getByTestId('typography')).toBeInTheDocument();
    expect(typography).toHaveClass('typography');
  });

  test('large size', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" size="large" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography_size_large');
  });

  test('medium size', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" size="medium" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography_size_medium');
  });

  test('small size', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" size="small" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography_size_small');
  });

  test('display variant', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="display" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography_variant_display');
  });

  test('headline variant', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="headline" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography_variant_headline');
  });

  test('title variant', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="title" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography_variant_title');
  });

  test('label variant', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="label" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography_variant_label');
  });

  test('body variant', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="body" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography_variant_body');
  });
});
