'use client';

import { useState } from 'react';
import { FiCopy, FiCheck, FiRefreshCw } from 'react-icons/fi';

const PxRemConverter = () => {
  const [px, setPx] = useState<string>('16');
  const [rem, setRem] = useState<string>('1');
  const [baseSize, setBaseSize] = useState<number>(16);
  const [copied, setCopied] = useState<string | null>(null);

  const handlePxChange = (value: string) => {
    setPx(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setRem((num / baseSize).toFixed(4).replace(/\.?0+$/, ''));
    } else {
      setRem('');
    }
  };

  const handleRemChange = (value: string) => {
    setRem(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setPx((num * baseSize).toFixed(2).replace(/\.?0+$/, ''));
    } else {
      setPx('');
    }
  };

  const handleBaseChange = (value: number) => {
    setBaseSize(value);
    const num = parseFloat(px);
    if (!isNaN(num)) {
      setRem((num / value).toFixed(4).replace(/\.?0+$/, ''));
    }
  };

  const copyToClipboard = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  const commonSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96];

  return (
    <div className="space-y-8">
      {/* Base Size Selector */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm font-medium text-white/70">
            Base Font Size
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleBaseChange(16)}
              className="flex items-center gap-1 rounded-lg bg-neutral-800 px-3 py-1.5 text-xs text-white/60 transition-colors hover:bg-brand/20 hover:text-brand"
            >
              <FiRefreshCw className="text-xs" />
              Reset to 16px
            </button>
          </div>
        </div>
        <input
          type="number"
          value={baseSize}
          onChange={(e) => handleBaseChange(Number(e.target.value) || 16)}
          className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-3 text-white transition-colors focus:border-brand focus:outline-none"
        />
      </div>

      {/* Converter */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* PX Input */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <label className="mb-2 block text-sm font-medium text-white/70">
            Pixels (px)
          </label>
          <div className="relative">
            <input
              type="number"
              value={px}
              onChange={(e) => handlePxChange(e.target.value)}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-4 pr-20 text-2xl font-mono font-bold text-white transition-colors focus:border-brand focus:outline-none"
              placeholder="16"
            />
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
              <span className="text-sm text-white/30">px</span>
              <button
                onClick={() => copyToClipboard(`${px}px`, 'px')}
                className="rounded-lg p-2 text-white/40 transition-colors hover:bg-neutral-700 hover:text-white"
                title="Copy"
              >
                {copied === 'px' ? (
                  <FiCheck className="text-green-400" />
                ) : (
                  <FiCopy />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* REM Output */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
          <label className="mb-2 block text-sm font-medium text-white/70">
            REM
          </label>
          <div className="relative">
            <input
              type="number"
              value={rem}
              onChange={(e) => handleRemChange(e.target.value)}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-4 pr-24 text-2xl font-mono font-bold text-brand transition-colors focus:border-brand focus:outline-none"
              placeholder="1"
              step="0.0625"
            />
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
              <span className="text-sm text-white/30">rem</span>
              <button
                onClick={() => copyToClipboard(`${rem}rem`, 'rem')}
                className="rounded-lg p-2 text-white/40 transition-colors hover:bg-neutral-700 hover:text-white"
                title="Copy"
              >
                {copied === 'rem' ? (
                  <FiCheck className="text-green-400" />
                ) : (
                  <FiCopy />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference Table */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
          Quick Reference
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {commonSizes.map((size) => (
            <button
              key={size}
              onClick={() => handlePxChange(String(size))}
              className={`rounded-lg border p-3 text-center transition-all duration-200 hover:scale-105 ${px === String(size)
                  ? 'border-brand/50 bg-brand/10 text-brand'
                  : 'border-neutral-700 bg-neutral-800/50 text-white/60 hover:border-brand/30 hover:text-white'
                }`}
            >
              <div className="text-sm font-mono font-bold">{size}px</div>
              <div className="mt-1 text-xs opacity-60">
                {(size / baseSize).toFixed(size % baseSize === 0 ? 0 : 3).replace(/\.?0+$/, '')}rem
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PxRemConverter;
