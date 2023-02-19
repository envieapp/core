import React from 'react';
import { block } from '@envie/bem';
import { cn } from '@envie/clsx';
import { PolymorphicProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';
import { TemplateNameProps } from './TemplateName.types';

const _defaultElement: React.ElementType = 'div';
type DefaultElement = typeof _defaultElement;
type HTML = HTMLElementTagNameMap[DefaultElement];
type Props = PolymorphicProps<DefaultElement, TemplateNameProps>;

const _TemplateName = React.forwardRef<HTML, Props>((
  {
    className,
    ...rest
  },
  ref,
) => {
  const templateName = block('template-name');

  return (
    <Box
      as={_defaultElement}
      {...rest}
      className={cn(templateName(), className)}
      ref={ref}
    />
  );
});

_TemplateName.displayName = 'TemplateName';

export const TemplateName = createPolymorphicComponent<DefaultElement, TemplateNameProps>(_TemplateName);
