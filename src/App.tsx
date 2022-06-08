import { Component, createMemo, createSignal, JSX } from 'solid-js';
import { marked } from "marked"

import styles from './App.module.css';

const App: Component = () => {
  const [text, setText] = createSignal("")
  const handler: JSX.EventHandlerUnion<HTMLTextAreaElement, InputEvent> = (e) => {
    setText(e.currentTarget.value)
  }

  const md = createMemo(() => marked(text()))

  return (
    <div class={styles["wrapper"]}>
      <h1>MDMD</h1>
      <textarea class={styles["editor"]} value={text()} onInput={handler} rows={10} />
      <div class={styles["preview"]} innerHTML={md()} />
    </div>
  );
};

export default App;
