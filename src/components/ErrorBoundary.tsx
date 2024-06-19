import { useErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }: any) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div
      role="alert"
      className="m-4 border border-slate-200 px-4 py-4 rounded-lg flex flex-col gap-4 justify-evenly"
    >
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button className="btn-primary max-w-[150px]" onClick={resetBoundary}>
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
