<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { indentWithTab } from '@codemirror/commands';
    import { json } from '@codemirror/lang-json';
    import { EditorState } from '@codemirror/state';
    import { oneDark } from '@codemirror/theme-one-dark';
    import { EditorView, keymap, lineNumbers } from '@codemirror/view';
    import { minimalSetup } from 'codemirror';

    export let request;

    let editorContainer;
    let editorValue = writable(request.json);

    onMount(() => {
        let state = EditorState.create({
            doc: $editorValue || request.json,
            extensions: [
                minimalSetup,
                json(),
                lineNumbers(),
                oneDark,
                keymap.of([indentWithTab]),
                EditorView.updateListener.of(update => {
                    if (update.docChanged) {
                        editorValue.set(update.state.doc.toString());
                    }
                }),
            ],
        });

        let view = new EditorView({
            state,
            parent: editorContainer,
        });

        return () => view.destroy();
    });

    $: request.json = $editorValue;
</script>

<div class="h-[20em] rounded-md overflow-hidden">
    <div
        bind:this={editorContainer}
        class="editor-container w-full h-full bg-[#282c34] border-[1px] border-gray-300 overflow-auto"
    ></div>
</div>
