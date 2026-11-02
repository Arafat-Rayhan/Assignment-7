export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center text-center">
        {/* Spinner */}
        <div className="mb-6 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />

        <h2 className="text-2xl font-bold text-gray-800">
          Loading...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait while we load the information.
        </p>
      </div>
    </div>
  );
}