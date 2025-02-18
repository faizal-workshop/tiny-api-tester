<script>
    import { onMount } from 'svelte';
    import { indentWithTab } from '@codemirror/commands';
    import { json } from '@codemirror/lang-json';
    import { EditorState } from '@codemirror/state';
    import { oneDark } from '@codemirror/theme-one-dark';
    import { EditorView, keymap, lineNumbers } from '@codemirror/view';
    import { minimalSetup } from 'codemirror';

    export let content;

    let editorContainer;

    onMount(() => {
        let state = EditorState.create({
            doc: content,
            extensions: [
                minimalSetup,
                json(),
                lineNumbers(),
                oneDark,
                EditorState.readOnly.of(true),
                keymap.of([indentWithTab]),
            ],
        });

        let view = new EditorView({
            state,
            parent: editorContainer,
        });

        return () => view.destroy();
    });
</script>

<div class="h-[21em] rounded-md overflow-hidden">
    <div
        bind:this={editorContainer}
        class="editor-container w-full h-full bg-[#282c34] border-[1px] border-gray-300 overflow-auto"
    ></div>
</div>
