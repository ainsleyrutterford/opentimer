import React from "react";

const TestHTML = () => {
  return (
    <>
      <section id="text">
        <header>
          <h1>Text</h1>
        </header>
        <article id="text__headings">
          <header>
            <h2>Headings</h2>
          </header>
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__paragraphs">
          <header>
            <h2>Paragraphs</h2>
          </header>
          <div>
            <p>
              A paragraph (from the Greek paragraphos, “to write beside” or
              “written beside”) is a self-contained unit of a discourse in
              writing dealing with a particular point or idea. A paragraph
              consists of one or more sentences. Though not required by the
              syntax of any language, paragraphs are usually an expected part of
              formal writing, used to organize longer prose.
            </p>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__blockquotes">
          <header>
            <h2>Blockquotes</h2>
          </header>
          <div>
            <blockquote>
              <p>
                A block quotation (also known as a long quotation or extract) is
                a quotation in a written document, that is set off from the main
                text as a paragraph, or block of text.
              </p>
              <p>
                It is typically distinguished visually using indentation and a
                different typeface or smaller size quotation. It may or may not
                include a citation, usually placed at the bottom.
              </p>
              <cite>
                <a href="#!">Said no one, ever.</a>
              </cite>
            </blockquote>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__lists">
          <header>
            <h2>Lists</h2>
          </header>
          <div>
            <h3>Definition list</h3>
            <dl>
              <dt>Definition List Title</dt>
              <dd>This is a definition list division.</dd>
            </dl>
            <h3>Ordered List</h3>
            <ol type="1">
              <li>List Item 1</li>
              <li>
                List Item 2
                <ol type="A">
                  <li>List Item 1</li>
                  <li>
                    List Item 2
                    <ol type="a">
                      <li>List Item 1</li>
                      <li>
                        List Item 2
                        <ol type="I">
                          <li>List Item 1</li>
                          <li>
                            List Item 2
                            <ol type="i">
                              <li>List Item 1</li>
                              <li>List Item 2</li>
                              <li>List Item 3</li>
                            </ol>
                          </li>
                          <li>List Item 3</li>
                        </ol>
                      </li>
                      <li>List Item 3</li>
                    </ol>
                  </li>
                  <li>List Item 3</li>
                </ol>
              </li>
              <li>List Item 3</li>
            </ol>
            <h3>Unordered List</h3>
            <ul>
              <li>List Item 1</li>
              <li>
                List Item 2
                <ul>
                  <li>List Item 1</li>
                  <li>
                    List Item 2
                    <ul>
                      <li>List Item 1</li>
                      <li>
                        List Item 2
                        <ul>
                          <li>List Item 1</li>
                          <li>
                            List Item 2
                            <ul>
                              <li>List Item 1</li>
                              <li>List Item 2</li>
                              <li>List Item 3</li>
                            </ul>
                          </li>
                          <li>List Item 3</li>
                        </ul>
                      </li>
                      <li>List Item 3</li>
                    </ul>
                  </li>
                  <li>List Item 3</li>
                </ul>
              </li>
              <li>List Item 3</li>
            </ul>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__blockquotes">
          <header>
            <h1>Blockquotes</h1>
          </header>
          <div>
            <blockquote>
              <p>
                A block quotation (also known as a long quotation or extract) is
                a quotation in a written document, that is set off from the main
                text as a paragraph, or block of text.
              </p>
              <p>
                It is typically distinguished visually using indentation and a
                different typeface or smaller size quotation. It may or may not
                include a citation, usually placed at the bottom.
              </p>
              <cite>
                <a href="#!">Said no one, ever.</a>
              </cite>
            </blockquote>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__details">
          <header>
            <h1>Details / Summary</h1>
          </header>
          <details>
            <summary>Expand for details</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              odio! Odio natus ullam ad quaerat, eaque necessitatibus, aliquid
              distinctio similique voluptatibus dicta consequuntur animi.
              Quaerat facilis quidem unde eos! Ipsa.
            </p>
          </details>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__address">
          <header>
            <h1>Address</h1>
          </header>
          <address>
            Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br />
            Visit us at:
            <br />
            Example.com
            <br />
            Box 564, Disneyland
            <br />
            USA
          </address>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__hr">
          <header>
            <h2>Horizontal rules</h2>
          </header>
          <div>
            <hr />
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__tables">
          <header>
            <h2>Tabular data</h2>
          </header>
          <table>
            <caption>Table Caption</caption>
            <thead>
              <tr>
                <th>Table Heading 1</th>
                <th>Table Heading 2</th>
                <th>Table Heading 3</th>
                <th>Table Heading 4</th>
                <th>Table Heading 5</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Table Footer 1</th>
                <th>Table Footer 2</th>
                <th>Table Footer 3</th>
                <th>Table Footer 4</th>
                <th>Table Footer 5</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
            </tbody>
          </table>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__code">
          <header>
            <h2>Code</h2>
          </header>
          <div>
            <p>
              <strong>Keyboard input:</strong> <kbd>Cmd</kbd>
            </p>
            <p>
              <strong>Inline code:</strong>{" "}
              <code>&lt;div&gt;code&lt;/div&gt;</code>
            </p>
            <p>
              <strong>Sample output:</strong>{" "}
              <samp>This is sample output from a computer program.</samp>
            </p>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__inline">
          <header>
            <h2>Inline elements</h2>
          </header>
          <div>
            <p>
              <a href="#!">This is a text link</a>.
            </p>
            <p>
              <strong>Strong is used to indicate strong importance.</strong>
            </p>
            <p>
              <em>This text has added emphasis.</em>
            </p>
            <p>
              The <b>b element</b> is stylistically different text from normal
              text, without any special importance.
            </p>
            <p>
              The <i>i element</i> is text that is offset from the normal text.
            </p>
            <p>
              The <u>u element</u> is text with an unarticulated, though
              explicitly rendered, non-textual annotation.
            </p>
            <p>
              <del>This text is deleted</del> and{" "}
              <ins>This text is inserted</ins>.
            </p>
            <p>
              <s>This text has a strikethrough</s>.
            </p>
            <p>
              Superscript<sup>®</sup>.
            </p>
            <p>
              Subscript for things like H<sub>2</sub>O.
            </p>
            <p>
              <small>This small text is small for fine print, etc.</small>
            </p>
            <p>
              Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
            </p>
            <p>
              <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">
                This text is a short inline quotation.
              </q>
            </p>
            <p>
              <cite>This is a citation.</cite>
            </p>
            <p>
              The <dfn>dfn element</dfn> indicates a definition.
            </p>
            <p>
              The <mark>mark element</mark> indicates a highlight.
            </p>
            <p>
              The <var>variable element</var>, such as <var>x</var> ={" "}
              <var>y</var>.
            </p>
            <p>
              The time element:{" "}
              <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time>
            </p>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
        <article id="text__comments">
          <header>
            <h2>HTML Comments</h2>
          </header>
          <div>
            <p>There is comment here:</p>
            <p>
              There is a comment spanning multiple tags and lines below here.
            </p>
          </div>
          <footer>
            <p>
              <a href="#top">[Top]</a>
            </p>
          </footer>
        </article>
      </section>
    </>
  );
};

export default TestHTML;
