import { IconGallery } from "@hackplan/uui";

import  { ReactComponent as Github } from './assets/github.svg';

export const Icons = IconGallery({
  Github: { source: Github },
}, { width: 16, height: 16, mode: 'svg' })