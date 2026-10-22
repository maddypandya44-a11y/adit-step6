// Plain browser storage for the Supabase auth session.
//
// This used to broker session storage to the Lovable editor on preview
// surfaces; normal sites don't need that, so it is now a thin localStorage
// adapter (kept under the same export name because the generated client
// imports it).

const FALLBACK = {
  getItem: (_key: string) => null as string | null,
  setItem: (_key: string, _value: string) => {},
  removeItem: (_key: string) => {},
};

export function brokeredPreviewStorage() {
  if (typeof window === "undefined") return FALLBACK;
  return window.localStorage;
}
