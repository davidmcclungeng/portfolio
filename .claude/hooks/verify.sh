#!/usr/bin/env bash
# PostToolUse hook: typecheck and lint after an agent edits TypeScript.
#
# Exit 2 feeds stderr back to the model and makes it fix the problem before
# continuing, so "lint is clean" stops being a claim and becomes a fact.
set -uo pipefail
cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

# Only react to TS/TSX edits; the file path arrives as JSON on stdin
file=$(cat | sed -n 's/.*"file_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' | head -1)
case "$file" in
  *.ts|*.tsx) ;;
  *) exit 0 ;;
esac

out=$(npx tsc --noEmit 2>&1); tsc_status=$?
if [ $tsc_status -ne 0 ]; then
  printf 'Typecheck failed after editing %s:\n\n%s\n' "$file" "$out" >&2
  exit 2
fi

out=$(npx eslint --max-warnings 0 "$file" 2>&1); lint_status=$?
if [ $lint_status -ne 0 ]; then
  printf 'ESLint failed on %s (warnings count as failures, matching CI):\n\n%s\n' "$file" "$out" >&2
  exit 2
fi

exit 0
