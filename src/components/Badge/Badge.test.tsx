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

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('badge');
  });

  test('small size', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" size="small" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_size_small');
    expect(badge.hasChildNodes()).toBeFalsy();
  });

  test('large-single size', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" size="large-single" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_size_large-single');
    expect(badge.hasChildNodes()).toBeTruthy();
  });

  test('large-multiple size', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" size="large-multiple" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_size_large-multiple');
    expect(badge.hasChildNodes()).toBeTruthy();
  });

  test('with over max and suffix', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" size="large-multiple" label={30} labelMaxSuffix="..." max={5} />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    const label = badge.querySelector('.badge__label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('5...');
  });

  test('with under max and suffix', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" size="large-multiple" label={2} labelMaxSuffix="..." max={5} />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    const label = badge.querySelector('.badge__label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('2');
  });

  test('primary color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="primary" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_primary');
  });

  test('primary-container color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="primary-container" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_primary-container');
  });

  test('secondary color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="secondary" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_secondary');
  });

  test('secondary-container color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="secondary-container" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_secondary-container');
  });

  test('tertiary color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="tertiary" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_tertiary');
  });

  test('tertiary-container color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="tertiary-container" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_tertiary-container');
  });

  test('success color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="success" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_success');
  });

  test('success-container color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="success-container" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_success-container');
  });

  test('warning color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="warning" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_warning');
  });

  test('warning-container color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="warning-container" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_warning-container');
  });

  test('error color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="error" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_error');
  });

  test('error-container color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="error-container" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_error-container');
  });

  test('info color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="info" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_info');
  });

  test('info-container color', () => {
    render(
      <TestProviders>
        <Badge data-testid="badge" color="info-container" />
      </TestProviders>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('badge_color_info-container');
  });
});
