import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";

export const CODE = `<main>
  <div>
    <h1>[Your Name]</h1>
    <p>[Your Major], Northeastern University</p>
    <ul>
      <li>
        <a>[Your email]</a>
      </li>
      <li>
        <a>[Your favorite website]</a>
      </li>
    </ul>
  </div>
</main>`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        The <CodeSegment>{"<main>"}</CodeSegment> element represents the
        dominant content of the HTML document. This consists of content directly
        related to the central topic of a document, or the central functionality
        of an application.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        The <CodeSegment>{"<div>"}</CodeSegment> element is the generic
        container for content, thus making it the most flexible and used
        element. It has no effect on the content or layout until styled in some
        way using CSS.
        <br />
        <br />
        With its wide range of flexibility, it can be easy to misuse this
        element. <b>Semantic HTML tags</b>, such as{" "}
        <CodeSegment>{"<p>"}</CodeSegment> or{" "}
        <CodeSegment>{"<li>"}</CodeSegment> should be used when applicable. This
        particularly helps assistive technologies such as screen readers know
        how to share the contents of an HTML document.
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        There are six (6) levels of section headings from{" "}
        <CodeSegment>{"<h1>"}</CodeSegment> to{" "}
        <CodeSegment>{"<h6>"}</CodeSegment>. <CodeSegment>{"<h1>"}</CodeSegment>{" "}
        is the highest section level and <CodeSegment>{"<h6>"}</CodeSegment> is
        the lowest.
        <br />
        <br />A page should generally have a single{" "}
        <CodeSegment>{"<h1>"}</CodeSegment> element that describes the content
        of the page, and other headings should be nested without skipping
        levels.
      </>
    ),
  },
  {
    lines: [4],
    content: (
      <>
        The <CodeSegment>{"<p>"}</CodeSegment> element represents a paragraph.
        Paragraphs are usually represented in visual media as blocks of text
        separated from adjacent blocks by blank lines and/or first-line
        indentation.
      </>
    ),
  },
  {
    lines: [5],
    content: (
      <>
        The <CodeSegment>{"<ul>"}</CodeSegment> element represents an unordered
        list of items, typically rendered as a bulleted list.
        <br />
        <br />
        An alternative to this element is the{" "}
        <CodeSegment>{"<ol>"}</CodeSegment> element which represents an ordered
        list of items, typically rendered as a numbered list.
      </>
    ),
  },
  {
    lines: [6, 9],
    content: (
      <>
        The <CodeSegment>{"<li>"}</CodeSegment> element represents an item in a
        list. They are typically displayed using bullet points in menus and
        unordered lists.
        <br />
        <br />
        In ordered lists, list items are usually displayed with an ascending
        counter on the left, such as a number or letter.
      </>
    ),
  },
  {
    lines: [7, 10],
    content: (
      <>
        The <CodeSegment>{"<a>"}</CodeSegment> element (or <em>anchor</em>{" "}
        element) creates a hyperlink to web pages, files, email addresses,
        locations in the same page, or anything else a URL can address.
      </>
    ),
  },
  {
    lines: [8, 11, 12, 13, 14],
    content: (
      <>
        The starting forward slash denotes that this is a closing tag, closing
        out the tag which was opened earlier in the HTML document.
      </>
    ),
  },
];
