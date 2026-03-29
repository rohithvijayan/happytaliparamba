import DOMPurify from "isomorphic-dompurify";

const ALLOWED_TAGS = ["p", "strong", "em", "b", "i", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "a", "br", "blockquote", "span"];
const ALLOWED_ATTR = ["href", "target", "rel"];
const FORBID_TAGS = ["script", "style", "iframe", "object", "embed", "form", "input"];

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    FORBID_TAGS,
  }) as string;
}
