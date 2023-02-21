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

    const button = screen.getByTestId('button');
    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(button).toHaveClass('button');
  });

  test('with start icon', () => {
    render(
      <TestProviders>
        <Button data-testid="button" startIcon={<svg />} />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_with-start-icon');
  });

  test('with end icon', () => {
    render(
      <TestProviders>
        <Button data-testid="button" endIcon={<svg />} />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_with-end-icon');
  });

  test('elevated variant', () => {
    render(
      <TestProviders>
        <Button data-testid="button" variant="elevated" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_variant_elevated');
  });

  test('filled variant', () => {
    render(
      <TestProviders>
        <Button data-testid="button" variant="filled" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_variant_filled');
  });

  test('tonal variant', () => {
    render(
      <TestProviders>
        <Button data-testid="button" variant="tonal" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_variant_tonal');
  });

  test('outlined variant', () => {
    render(
      <TestProviders>
        <Button data-testid="button" variant="outlined" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_variant_outlined');
  });

  test('text variant', () => {
    render(
      <TestProviders>
        <Button data-testid="button" variant="text" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_variant_text');
  });

  test('primary color', () => {
    render(
      <TestProviders>
        <Button data-testid="button" color="primary" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_color_primary');
  });

  test('secondary color', () => {
    render(
      <TestProviders>
        <Button data-testid="button" color="secondary" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_color_secondary');
  });

  test('tertiary color', () => {
    render(
      <TestProviders>
        <Button data-testid="button" color="tertiary" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_color_tertiary');
  });

  test('success color', () => {
    render(
      <TestProviders>
        <Button data-testid="button" color="success" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_color_success');
  });

  test('warning color', () => {
    render(
      <TestProviders>
        <Button data-testid="button" color="warning" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_color_warning');
  });

  test('error color', () => {
    render(
      <TestProviders>
        <Button data-testid="button" color="error" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_color_error');
  });

  test('info color', () => {
    render(
      <TestProviders>
        <Button data-testid="button" color="info" />
      </TestProviders>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('button_color_info');
  });
});
