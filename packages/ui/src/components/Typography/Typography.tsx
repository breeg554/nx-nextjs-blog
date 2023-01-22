import React from 'react';
import classNames from 'classnames';

export interface TypographyProps {
  variant?: TypographyVariant;
  component?: TypographyComponent;
  className?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'h1',
  component,
  className,
}) => {
  const Component = component || mapVariantToComponent(variant);

  return (
    <Component className={classNames(variantStyles(variant), className)}>{children}</Component>
  );
};

function mapVariantToComponent(variant: TypographyVariant) {
  switch (variant) {
    case 'body':
      return 'p';
    case 'caption':
      return 'span';
    default:
      return variant;
  }
}

function variantStyles(variant: TypographyVariant) {
  switch (variant) {
    case 'h1':
      return 'text-[32px] leading-[40px] font-bold lg:text-[48px] lg:leading-[56px]';
    case 'h2':
      return 'text-[28px] leading-[36px] font-bold lg:text-[40px] lg:leading-[50px]';
    case 'h3':
      return 'text-[24px] leading-[32px] font-bold lg:text-[32px] lg:leading-[42px]';
    case 'h4':
      return 'text-[18px] leading-[22px] font-bold lg:text-[24px] lg:leading-[32px]';
    case 'h5':
      return 'text-[16px] leading-[20px] font-bold lg:text-[20px] lg:leading-[26px]';
    case 'h6':
      return 'text-[14px] leading-[20px] font-bold lg:text-[16px] lg:leading-[24px]';
    case 'body':
      return 'text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px]';
    case 'caption':
      return 'text-[12px] leading-[18px]';
  }
}

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';

type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
