import { CustomTextProps } from '../types';
import { Link } from 'expo-router';
import { Text as TamagText, isWeb, styled } from 'tamagui';
import areEqual from '../utils/MemoFunction';
import React from 'react';

const StyledText = styled(TamagText, {
  fontFamily: '$body',
  fontSize: 16,
  lineHeight: 22,
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
          fontSize: 12,
        },
        $md: {
          fontSize: 12,
        },
        $lg: {
          fontSize: 14,
        },
        color: '$red',
        fontWeight: '$5',
      },
    },
    success: {
      true: {
        $sm: {
          fontSize: 14,
        },
        color: '$green',
        fontWeight: '$5',
      },
    },
    notchChange: {
      h2: {
        $sm: {
          fontSize: 24,
        },
        $md: {
          fontSize: 24,
        },
        color: 'black',
        fontWeight: '$6',
      },
      h1: {
        $sm: {
          fontSize: 48,
        },
        $md: {
          fontSize: 48,
          lineHeight: 48,
        },
        fontWeight: '$6',
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
          fontSize: 18,
        },
        $lg: {
          fontSize: 22,
        },
      },
      2: {
        $sm: {
          fontSize: 22,
        },
        $md: {
          fontSize: 22,
        },
        $lg: {
          fontSize: 22,
        },
      },
      [3]: {
        $sm: {
          fontSize: 24,
        },
        $md: {
          fontSize: 24,
        },
        $lg: {
          fontSize: 24,
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

export default React.memo(Text, areEqual);
