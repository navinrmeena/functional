import { CustomTextProps } from '../types';
import { Link } from 'expo-router';
import { Text as TamagText, styled, isWeb } from 'tamagui';

import React from 'react';

const StyledText = styled(TamagText, {
  fontFamily: '$body',
  fontSize: 16,
  lineHeight: 24,
  flexShrink: 1,
  variants: {
    hover: {
      true: {
        hoverStyle: {
          textDecorationLine: 'underline',
          textDecorationColor: 'white',
        },
        cur: 'pointer',
      },
      orange: {
        hoverStyle: {
          textDecorationColor: '$vividOrange100',
          textDecorationLine: 'underline',
        },
        cur: 'pointer',
        color: '$vividOrange100',
      },
      black: {
        hoverStyle: {
          textDecorationColor: 'black',
          textDecorationLine: 'underline',
        },
        cur: 'pointer',
        color: 'black',
      },
      green: {
        hoverStyle: {
          textDecorationColor: '$green',
          textDecorationLine: 'underline',
        },
        cur: 'pointer',
        color: '$green',
      },
    },
    isLight: {
      true: {
        color: 'black',
      },
    },
    isDark: {
      true: {
        color: 'white',
      },
    },
    orange: {
      true: {
        color: '$vividOrange100',
      },
    },
    error: {
      true: {
        $sm: {
          fontSize: '$xs',
        },
        $md: {
          fontSize: '$xs',
        },
        $lg: {
          fontSize: '$sm',
        },
        color: '$red',
        fontWeight: '$semibold',
      },
    },
    success: {
      true: {
        $sm: {
          fontSize: '$sm',
        },
        color: '$green',
        fontWeight: '$semibold',
      },
    },
    notchChange: {
      h2: {
        $sm: {
          fontSize: '$lg',
        },
        $md: {
          fontSize: 24,
        },
        color: 'black',
        fontWeight: '$bold',
      },
      h1: {
        $sm: {
          fontSize: '$xl',
        },
        $md: {
          fontSize: '$3xl',
          lineHeight: 48,
        },
        fontWeight: '$bold',
        textAlign: 'center',
      },
      [-4]: {
        $sm: {
          fontSize: 10,
        },
        $md: {
          fontSize: 10,
        },
      },
      [-3]: {
        $sm: {
          fontSize: 12,
        },
        $md: {
          fontSize: 12,
        },
      },
      [-2]: {
        $sm: {
          fontSize: 13,
        },
        $md: {
          fontSize: 13,
        },
      },
      [-1]: {
        $sm: {
          fontSize: 14,
        },
        $md: {
          fontSize: 14,
        },
      },
      1: {
        $sm: {
          fontSize: 18,
        },
        $md: {
          fontSize: '$lg',
        },
        $lg: {
          fontSize: '$xl',
        },
      },
      2: {
        $sm: {
          fontSize: 22,
        },
        $md: {
          fontSize: '$xl',
        },
        $lg: {
          fontSize: '$2xl',
        },
      },
      [3]: {
        $sm: {
          fontSize: 24,
        },
        $md: {
          fontSize: '$2xl',
        },
        $lg: {
          fontSize: '$3xl',
        },
      },
    },
  } as const,
});

function Text({ linkProps, ...props }: CustomTextProps) {
  const { children, ...rest } = props;

  return linkProps ? (
    <Link {...linkProps} asChild={!isWeb}>
      <StyledText
        hoverStyle={{ textDecorationLine: 'underline', textDecorationColor: '$vividOrange100' }}
        isDark={props.isDark || true}
        success={props.success}
        error={props.error}
        notchChange={props.notchChange}
        hover={props.hover}
        isLight={props.isLight}
        orange={props.orange}
        cur="pointer"
        {...rest}
      >
        {children}
      </StyledText>
    </Link>
  ) : (
    <StyledText isDark={props.isDark || true} success={props.success} error={props.error} notchChange={props.notchChange} hover={props.hover} isLight={props.isLight} orange={props.orange} {...rest}>
      {children}
    </StyledText>
  );
}

export default Text;
