import StackItem from './StackItem';

function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'}{' '}
            Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 transition hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      <div className="mt-5">
        {stack.length === 0 ? (
          <div className="rounded-xl bg-gray-50 px-4 py-8 text-center">
            <p className="text-sm text-gray-500">No technologies added yet.</p>

            <p className="mt-1 text-xs text-gray-400">
              Add technologies from the list to build your stack.
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
