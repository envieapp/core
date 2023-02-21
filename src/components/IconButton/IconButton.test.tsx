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

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toBeInTheDocument();
    expect(iconButton).toHaveClass('icon-button');
  });

  test('selected', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" selected>
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_selected');
  });

  test('standard variant', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" variant="standard">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_variant_standard');
  });

  test('filled variant', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" variant="filled">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_variant_filled');
  });

  test('tonal variant', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" variant="tonal">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_variant_tonal');
  });

  test('outlined variant', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" variant="outlined">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_variant_outlined');
  });

  test('primary color', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" color="primary">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_color_primary');
  });

  test('secondary color', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" color="secondary">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_color_secondary');
  });

  test('tertiary color', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" color="tertiary">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_color_tertiary');
  });

  test('success color', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" color="success">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_color_success');
  });

  test('warning color', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" color="warning">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_color_warning');
  });

  test('error color', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" color="error">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_color_error');
  });

  test('info color', () => {
    render(
      <TestProviders>
        <IconButton data-testid="iconButton" color="info">
          <svg />
        </IconButton>
      </TestProviders>,
    );

    const iconButton = screen.getByTestId('iconButton');
    expect(iconButton).toHaveClass('icon-button_color_info');
  });
});
