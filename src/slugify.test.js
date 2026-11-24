import { describe, it, expect } from 'vitest';
import { slugify } from './slugify.js';

describe('slugify', () => {
  it('замінює пробіли дефісами та переводить у нижній регістр', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });
  it('прибирає зайві символи на краях', () => {
    expect(slugify('  --Hi!--  ')).toBe('hi');
  });
  it('повертає порожній рядок для порожнього вводу', () => {
    expect(slugify('')).toBe('');
  });
});