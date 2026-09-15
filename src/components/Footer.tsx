export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-5 text-xs text-muted lg:px-10">
      <div className="mx-auto max-w-[1040px]">
        &copy; {new Date().getFullYear()} David McClung
      </div>
    </footer>
  );
}
