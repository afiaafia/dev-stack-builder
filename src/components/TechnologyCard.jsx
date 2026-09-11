function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs font-medium text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
        <span className="text-xs font-medium text-gray-500">Difficulty</span>

        <span className="text-sm font-semibold text-gray-700">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
        <span className="text-xs font-medium text-gray-500">Rating</span>

        <span className="text-sm font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
          isAdded
            ? 'cursor-not-allowed bg-gray-100 text-gray-400'
            : 'gradient-primary text-white hover:opacity-90'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}

export default TechnologyCard;
