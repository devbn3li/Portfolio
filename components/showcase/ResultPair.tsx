import { RESULT } from './content';
import { ArrowGlyph } from './glyphs';
import { cx } from './scene';

// The arrow stays with the first word of the after value, so a line can break
// before the arrow or between the later words, but never right after it.
const [FIRST_WORD, ...OTHER_WORDS] = RESULT.after.split(' ');

/**
 * The headline result as type: the old value struck through, an arrow, the new
 * value in brand. Every size is in em: set font-size on this element (or its
 * parent) anywhere from 20px to 110px and the whole pair scales. The label
 * never drops below 12px.
 */
export function ResultPair({ className }: { className?: string }) {
  return (
    <p className={cx('m-0 flex flex-col gap-[0.14em]', className)}>
      <span className="text-[length:max(12px,0.16em)] uppercase leading-[1.3] tracking-[0.1em] text-muted">
        {RESULT.label}
      </span>
      <span className="leading-[1.04] tracking-[-0.03em]">
        <span className="sr-only">Before: </span>
        <s className="font-normal text-muted decoration-[0.06em]">{RESULT.before}</s>{' '}
        <span className="inline-block max-w-full font-extrabold text-brand">
          <span className="sr-only">after: </span>
          <span className="whitespace-nowrap">
            <ArrowGlyph className="mr-[0.24em] inline-block h-[0.5em] w-[1em] align-[0.1em] text-muted" />
            {FIRST_WORD}
          </span>
          {OTHER_WORDS.length > 0 && ` ${OTHER_WORDS.join(' ')}`}
        </span>
      </span>
    </p>
  );
}
