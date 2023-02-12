/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import IconRili from './IconRili';
import IconXiaoxi from './IconXiaoxi';
import IconLiwu from './IconLiwu';
export { default as IconRili } from './IconRili';
export { default as IconXiaoxi } from './IconXiaoxi';
export { default as IconLiwu } from './IconLiwu';

export type IconNames = 'rili' | 'xiaoxi' | 'liwu';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'rili':
      return <IconRili {...rest} />;
    case 'xiaoxi':
      return <IconXiaoxi {...rest} />;
    case 'liwu':
      return <IconLiwu {...rest} />;

  }

  return null;
};

export default IconFont;
