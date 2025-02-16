<script>
    import { onMount } from 'svelte';
    import { indentWithTab } from '@codemirror/commands';
    import { EditorState } from '@codemirror/state';
    import { EditorView, keymap, lineNumbers } from '@codemirror/view';
    import { minimalSetup } from 'codemirror';

    export let json = '';
    let editorContainer;

    onMount(() => {
        let state = EditorState.create({
            doc: json,
            extensions: [
                minimalSetup,
                lineNumbers(),
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

<div class="overflow-y-auto">
    <div
        bind:this={editorContainer}
        class="editor-container border-[1px] border-gray-300 rounded-sm"
    ></div>
</div>

<style>
    :global(.cm-line:nth-child(odd)) {
        background-color: #f8f8f8;
    }

    :global(.cm-line:nth-child(even)) {
        background-color: #eef;
    }
</style>
