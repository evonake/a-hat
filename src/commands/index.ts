import Command from '../api/command';

import { help } from './help';
import { shutdown } from './shutdown';

export const commands: Command[] = [help, shutdown];
