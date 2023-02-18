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

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('display medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="display" size="medium" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('display small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="display" size="small" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('headline large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="headline" size="large" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('headline medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="headline" size="medium" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('headline small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="headline" size="small" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('title large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="title" size="large" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('title medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="title" size="medium" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('title small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="title" size="small" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('label large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="label" size="large" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('label medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="label" size="medium" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('label small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="label" size="small" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('body large', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="body" size="large" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('body medium', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="body" size="medium" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });

  test('body small', () => {
    render(
      <TestProviders>
        <Typography data-testid="typography" variant="body" size="small" />
      </TestProviders>,
    );

    expect(screen.getByTestId('typography')).toBeInTheDocument();
  });
});
