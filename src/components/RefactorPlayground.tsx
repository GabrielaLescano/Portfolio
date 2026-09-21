import React, { useState } from 'react';

export const RefactorPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jquery' | 'react' | 'test'>('react');
  const [cartCount, setCartCount] = useState(1);

  return (
    <section id="playground" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-purple-500 font-mono text-lg">02.</span> Showcase de Arquitectura & Refactor
      </h2>
      <p className="text-zinc-400 text-sm mb-8">
        Muestra interactiva de la migración de componentes legados (jQuery) hacia React + TypeScript + Tests (Jest/RTL).
      </p>

      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">

        <div className="flex border-b border-zinc-800 bg-zinc-950/60 px-4 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('jquery')}
            className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-colors ${
              activeTab === 'jquery'
                ? 'bg-zinc-900 text-amber-400 border-t border-x border-zinc-800'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            legacy-cart.js (jQuery)
          </button>
          <button
            onClick={() => setActiveTab('react')}
            className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-colors ${
              activeTab === 'react'
                ? 'bg-zinc-900 text-purple-400 border-t border-x border-zinc-800'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            CartCounter.tsx (React + TS)
          </button>
          <button
            onClick={() => setActiveTab('test')}
            className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-colors ${
              activeTab === 'test'
                ? 'bg-zinc-900 text-emerald-400 border-t border-x border-zinc-800'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            CartCounter.test.tsx (RTL)
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 font-mono text-xs overflow-x-auto text-zinc-300">
            {activeTab === 'jquery' && (
              <pre className="text-amber-300/90 leading-relaxed">
{`// Legacy jQuery pattern
$(document).ready(function() {
  var count = 1;
  $('#btn-increase').on('click', function() {
    count++;
    $('#cart-count').text(count);
  });
});`}
              </pre>
            )}

            {activeTab === 'react' && (
              <pre className="text-purple-300/90 leading-relaxed">
{`// Modern React + TypeScript
interface Props {
  initialCount?: number;
}

export const CartCounter: React.FC<Props> = ({ initialCount = 1 }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Carrito ({count})
    </button>
  );
};`}
              </pre>
            )}

            {activeTab === 'test' && (
              <pre className="text-emerald-300/90 leading-relaxed">
{`// Integration Test (Jest + RTL)
test('increments counter on click', () => {
  render(<CartCounter initialCount={1} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(button).toHaveTextContent('Carrito (2)');
});`}
              </pre>
            )}
          </div>

          <div className="flex flex-col justify-center items-center p-8 bg-zinc-950/40 rounded-xl border border-dashed border-zinc-800">
            <span className="text-xs font-mono text-zinc-500 mb-4">Vista Previa Interactiva</span>
            
            <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
              <span className="text-sm font-medium text-zinc-300">Ítems en carrito:</span>
              <span className="text-lg font-bold text-purple-400 font-mono px-3 py-1 bg-zinc-950 rounded-lg border border-zinc-800">
                {cartCount}
              </span>
              <button
                onClick={() => setCartCount((prev) => prev + 1)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-purple-950"
              >
                + Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};