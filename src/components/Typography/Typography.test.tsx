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

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('display large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="display" size="large" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_display');
    expect(typography).toHaveClass('typography_size_large');
  });

  test('display medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="display" size="medium" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_display');
    expect(typography).toHaveClass('typography_size_medium');
  });

  test('display small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="display" size="small" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_display');
    expect(typography).toHaveClass('typography_size_small');
  });

  test('headline large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="headline" size="large" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_headline');
    expect(typography).toHaveClass('typography_size_large');
  });

  test('headline medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="headline" size="medium" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_headline');
    expect(typography).toHaveClass('typography_size_medium');
  });

  test('headline small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="headline" size="small" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_headline');
    expect(typography).toHaveClass('typography_size_small');
  });

  test('title large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="title" size="large" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_title');
    expect(typography).toHaveClass('typography_size_large');
  });

  test('title medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="title" size="medium" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_title');
    expect(typography).toHaveClass('typography_size_medium');
  });

  test('title small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="title" size="small" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_title');
    expect(typography).toHaveClass('typography_size_small');
  });

  test('label large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="label" size="large" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_label');
    expect(typography).toHaveClass('typography_size_large');
  });

  test('label medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="label" size="medium" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_label');
    expect(typography).toHaveClass('typography_size_medium');
  });

  test('label small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="label" size="small" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_label');
    expect(typography).toHaveClass('typography_size_small');
  });

  test('body large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="body" size="large" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_body');
    expect(typography).toHaveClass('typography_size_large');
  });

  test('body medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="body" size="medium" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_body');
    expect(typography).toHaveClass('typography_size_medium');
  });

  test('body small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="body" size="small" />
      </TestProviders>,
    );

    const typography = screen.getByTestId('typography');
    expect(typography).toHaveClass('typography');
    expect(typography).toHaveClass('typography_variant_body');
    expect(typography).toHaveClass('typography_size_small');
  });
});
