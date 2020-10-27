import getURL from './utils';
import { ADDRESS, PORT, PATH, REGION } from './constant';

export const url = getURL(ADDRESS, PORT, PATH);
export const region = REGION;
