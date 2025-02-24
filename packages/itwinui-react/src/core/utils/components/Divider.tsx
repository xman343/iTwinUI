/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import cx from 'classnames';
import '@itwin/itwinui-css/css/utils.css';
import { Box } from './Box.js';
import type { PolymorphicForwardRefComponent } from '../props.js';

type DividerProps = {
  /**
   * Sets the orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
};

/**
 * Shows a divider
 */
export const Divider = React.forwardRef((props, ref) => {
  const { className, orientation = 'horizontal', ...rest } = props;

  return (
    <Box
      as='hr'
      className={cx('iui-divider', className)}
      aria-orientation={orientation === 'vertical' ? 'vertical' : undefined}
      ref={ref}
      {...rest}
    />
  );
}) as PolymorphicForwardRefComponent<'hr', DividerProps>;

export default Divider;
