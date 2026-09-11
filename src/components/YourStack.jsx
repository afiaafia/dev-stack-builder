import StackItem from './StackItem';

function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>

          <p className="mt-1 text-sm text-gray-500">
            Build your personalized technology stack.
          </p>
        </div>

        <span className="flex h-9 min-w-9 items-center justify-center rounded-full bg-pink-50 px-3 text-sm font-bold text-pink-600">
          {stack.length}
        </span>
      </div>

      <div className="mt-4 rounded-xl bg-gray-50 px-4 py-3">
        <p className="text-sm font-medium text-gray-700">
          {stack.length === 0
            ? 'No technologies selected'
            : `${stack.length} ${
                stack.length === 1 ? 'technology' : 'technologies'
              } selected`}
        </p>
      </div>

      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}

      <div className="mt-5">
        {stack.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-200 px-4 py-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl">
              +
            </div>

            <p className="mt-4 text-sm font-medium text-gray-600">
              Your stack is empty
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-400">
              Add technologies from the list to start building your stack.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default YourStack;
