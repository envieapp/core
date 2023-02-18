import { render, screen } from '@testing-library/react';
import React from 'react';
import { Box } from './Box';

describe('Box testing', () => {
  test('should be in the document', () => {
    render(
      <Box
        data-testid="box"
      />,
    );

    expect(screen.getByTestId('box')).toBeInTheDocument();
  });

  test('css prop', () => {
    render(
      <Box
        data-testid="box"
        css={[{ color: 'red' }, () => { return { background: 'black' }; }]}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.color).toBe('red');
    expect(computed.background).toBe('black');
  });

  test('sx prop', () => {
    render(
      <Box
        data-testid="box"
        sx={[{ color: 'red' }, () => { return { background: 'black' }; }]}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.color).toBe('red');
    expect(computed.background).toBe('black');
  });

  test('css and sx prop', () => {
    render(
      <Box
        data-testid="box"
        css={[{ margin: 16 }, () => { return { padding: 16 }; }]}
        sx={[{ color: 'red' }, () => { return { background: 'black' }; }]}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.color).toBe('red');
    expect(computed.background).toBe('black');
    expect(computed.margin).toBe('16px');
    expect(computed.padding).toBe('16px');
  });

  test('margin system prop', () => {
    render(
      <Box
        data-testid="box"
        m={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.marginTop).toBe('16px');
    expect(computed.marginRight).toBe('16px');
    expect(computed.marginBottom).toBe('16px');
    expect(computed.marginLeft).toBe('16px');
  });

  test('margin y system prop', () => {
    render(
      <Box
        data-testid="box"
        my={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.marginTop).toBe('16px');
    expect(computed.marginRight).toBe('');
    expect(computed.marginBottom).toBe('16px');
    expect(computed.marginLeft).toBe('');
  });

  test('margin x system prop', () => {
    render(
      <Box
        data-testid="box"
        mx={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.marginTop).toBe('');
    expect(computed.marginRight).toBe('16px');
    expect(computed.marginBottom).toBe('');
    expect(computed.marginLeft).toBe('16px');
  });

  test('margin top system prop', () => {
    render(
      <Box
        data-testid="box"
        mt={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.marginTop).toBe('16px');
    expect(computed.marginRight).toBe('');
    expect(computed.marginBottom).toBe('');
    expect(computed.marginLeft).toBe('');
  });

  test('margin right system prop', () => {
    render(
      <Box
        data-testid="box"
        mr={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.marginTop).toBe('');
    expect(computed.marginRight).toBe('16px');
    expect(computed.marginBottom).toBe('');
    expect(computed.marginLeft).toBe('');
  });

  test('margin bottom system prop', () => {
    render(
      <Box
        data-testid="box"
        mb={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.marginTop).toBe('');
    expect(computed.marginRight).toBe('');
    expect(computed.marginBottom).toBe('16px');
    expect(computed.marginLeft).toBe('');
  });

  test('margin left system prop', () => {
    render(
      <Box
        data-testid="box"
        ml={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.marginTop).toBe('');
    expect(computed.marginRight).toBe('');
    expect(computed.marginBottom).toBe('');
    expect(computed.marginLeft).toBe('16px');
  });

  test('margin hierarchy system prop', () => {
    render(
      <Box
        data-testid="box"
        m={32}
        my={24}
        mt={16}
        mr={28}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.marginTop).toBe('16px');
    expect(computed.marginRight).toBe('28px');
    expect(computed.marginBottom).toBe('24px');
    expect(computed.marginLeft).toBe('32px');
  });

  test('padding system prop', () => {
    render(
      <Box
        data-testid="box"
        p={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.paddingTop).toBe('16px');
    expect(computed.paddingRight).toBe('16px');
    expect(computed.paddingBottom).toBe('16px');
    expect(computed.paddingLeft).toBe('16px');
  });

  test('padding y system prop', () => {
    render(
      <Box
        data-testid="box"
        py={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.paddingTop).toBe('16px');
    expect(computed.paddingRight).toBe('');
    expect(computed.paddingBottom).toBe('16px');
    expect(computed.paddingLeft).toBe('');
  });

  test('padding x system prop', () => {
    render(
      <Box
        data-testid="box"
        px={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.paddingTop).toBe('');
    expect(computed.paddingRight).toBe('16px');
    expect(computed.paddingBottom).toBe('');
    expect(computed.paddingLeft).toBe('16px');
  });

  test('padding top system prop', () => {
    render(
      <Box
        data-testid="box"
        pt={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.paddingTop).toBe('16px');
    expect(computed.paddingRight).toBe('');
    expect(computed.paddingBottom).toBe('');
    expect(computed.paddingLeft).toBe('');
  });

  test('padding right system prop', () => {
    render(
      <Box
        data-testid="box"
        pr={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.paddingTop).toBe('');
    expect(computed.paddingRight).toBe('16px');
    expect(computed.paddingBottom).toBe('');
    expect(computed.paddingLeft).toBe('');
  });

  test('padding bottom system prop', () => {
    render(
      <Box
        data-testid="box"
        pb={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.paddingTop).toBe('');
    expect(computed.paddingRight).toBe('');
    expect(computed.paddingBottom).toBe('16px');
    expect(computed.paddingLeft).toBe('');
  });

  test('padding left system prop', () => {
    render(
      <Box
        data-testid="box"
        pl={16}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.paddingTop).toBe('');
    expect(computed.paddingRight).toBe('');
    expect(computed.paddingBottom).toBe('');
    expect(computed.paddingLeft).toBe('16px');
  });

  test('padding hierarchy system prop', () => {
    render(
      <Box
        data-testid="box"
        p={32}
        py={24}
        pt={16}
        pr={28}
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.paddingTop).toBe('16px');
    expect(computed.paddingRight).toBe('28px');
    expect(computed.paddingBottom).toBe('24px');
    expect(computed.paddingLeft).toBe('32px');
  });

  test('system props', () => {
    render(
      <Box
        data-testid="box"
        c="red"
        opacity={0.3}
        ff="Roboto"
        fz={12}
        fw={300}
        lts={1}
        ta="center"
        lh={12}
        fs="normal"
        tt="uppercase"
        td="underline"
        w={30}
        miw={25}
        maw={35}
        h={30}
        mih={25}
        mah={35}
        bgsz="100%"
        bgp="center"
        bgr="no-repeat"
        bga="fixed"
        pos="absolute"
        top={2}
        left={4}
        bottom={6}
        right={8}
        inset={5}
        display="flow"
      />,
    );

    const computed = getComputedStyle(screen.getByTestId('box'));
    expect(computed.color).toBe('red');
    expect(computed.opacity).toBe('0.3');
    expect(computed.fontFamily).toBe('Roboto');
    expect(computed.fontSize).toBe('12px');
    expect(computed.fontWeight).toBe('300');
    expect(computed.letterSpacing).toBe('1px');
    expect(computed.textAlign).toBe('center');
    expect(computed.lineHeight).toBe('12');
    expect(computed.fontStyle).toBe('normal');
    expect(computed.textTransform).toBe('uppercase');
    expect(computed.textDecoration).toBe('underline');
    expect(computed.width).toBe('30px');
    expect(computed.minWidth).toBe('25px');
    expect(computed.maxWidth).toBe('35px');
    expect(computed.height).toBe('30px');
    expect(computed.minHeight).toBe('25px');
    expect(computed.maxHeight).toBe('35px');
    expect(computed.backgroundSize).toBe('100%');
    expect(computed.backgroundPosition).toBe('center');
    expect(computed.backgroundRepeat).toBe('no-repeat');
    expect(computed.backgroundAttachment).toBe('fixed');
    expect(computed.position).toBe('absolute');
    expect(computed.top).toBe('2px');
    expect(computed.left).toBe('4px');
    expect(computed.bottom).toBe('6px');
    expect(computed.right).toBe('8px');
    expect(computed.inset).toBe('5px');
    expect(computed.display).toBe('flow');
  });
});
