<template>
  <div>
    <bubble-menu :editor="editor" v-if="editor" class="editor">
      <button
        class="editor__element"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <strong>B</strong>
      </button>
      <button
        class="editor__element"
        @click="editor.chain().focusm().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <em>I</em>
      </button>
      <button
        class="editor__element"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <del>U</del>
      </button>
      <button
        class="editor__element editor__element--heading"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
    </bubble-menu>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

export default {
  components: {
    EditorContent,
    BubbleMenu,
  },

  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      editor: null,
      limit: 280,
      users: [],
      comment_da: {},
      edit_comment_da: {},
    };
  },

  mounted() {
    this.editor = new Editor({
      content: this.modelValue,
      extensions: [StarterKit],
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      },
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_mixins.scss";

.editor {
  @include flex-center;
  border: 1px solid black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;
  z-index: 1;
  background: $main-color;

  &__element {
    width: 25px;
    height: 25px;
    font-size: 16px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background: black;
      color: white;
    }

    &.editor__element--heading {
      font-size: 13px;
      border-left: 1px solid black;
    }
  }
}
</style>
