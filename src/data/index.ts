import { Category } from '../types';
import { javaData } from './java';
import { reactData } from './react';
import { systemDesignData } from './systemDesign';
import { javascriptData } from './javascript';
import { springBootData } from './springBoot';
import { angularData } from './angular';
import { typescriptData } from './typescript';

// This acts as our main registry for all categories
export const categories: Category[] = [
  javaData,
  springBootData,
  angularData,
  reactData,
  javascriptData,
  typescriptData,
  systemDesignData,
];
