<!--
  Panel which displays a submission files with its line of code.
-->
<template>
  <div
    :id="panelId.toString().concat(title).concat(fileIndex.toString())"
    class="code-panel-container"
  >
    <div class="file-title">
      <p style="width: 90%">{{ title }}</p>
      <button
        class="collapse-button"
        style="width: 10%"
        @click="$emit('toggleCollapse')"
      >
        <img
          v-if="collapse"
          alt="hide info"
          src="../assets/keyboard_double_arrow_up_black_18dp.svg"
        />
        <img
          v-else
          alt="additional info"
          src="../assets/keyboard_double_arrow_down_black_18dp.svg"
        />
      </button>
    </div>
    <div :class="{ hidden: !collapse }">
      <div v-if="!isEmpty(lines)" class="code-container">
        <LineOfCode
          v-for="(line, index) in lines"
          :id="String(panelId).concat(title).concat(index.toString())"
          :key="index"
          :color="coloringArray[index]"
          :is-first="isFirst[index]"
          :is-last="isLast[index]"
          :line-number="index + 1"
          :text="line"
          :visible="collapse"
          @click="emitLineClicked(index)"
        />
      </div>
      <div v-else class="code-container">
        <p>Empty File</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { MatchInSingleFile } from "@/model/MatchInSingleFile";
import { defineComponent, ref, Ref } from "vue";
import LineOfCode from "./LineOfCode.vue";

export default defineComponent({
  emits: ["lineSelected", "toggleCollapse"],
  name: "CodePanel",
  components: { LineOfCode },
  props: {
    /**
     * Title of the displayed file.
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * Index of file amongst other files in submission.
     */
    fileIndex: {
      type: Number,
      required: true,
    },
    /**
     * Code lines of the file.
     * type: Array<string>
     */
    lines: {
      type: Array<string>,
      required: true,
    },
    /**
     * Matches in the file
     * type: Array<MatchInSingleFile>
     */
    matches: {
      type: Array<MatchInSingleFile>,
      required: true,
    },
    /**
     * Id of the FilesContainer. Needed for lines link generation.
     */
    panelId: {
      type: Number,
      required: true,
    },
    /**
     * Indicates whether files is collapsed or not.
     */
    collapse: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    /**
     * An object containing the color of each line in code. Keys are line numbers, values are their color.
     * Example: {
     *   ...
     *   100 : "#3333"
     *   101 : "#3333"
     *   102 : "#3333"
     *   103 : "#FFFF"
     *   ...
     * }
     * @type {Ref<UnwrapRef<{}>>}
     */
    const coloringArray: Ref<Array<string>> = ref([]);
    const isEmpty = (lines: Array<string>) => {
      return lines.length === 0 || lines.every((line) => !line.trim());
    };
    /**
     * An object containing an object from which an id is to of the line to which this is linked is constructed.
     * Id object contains panel, file name, first line number of linked matched.
     * Example: {
     *   panel: 1,
     *   file: "Example.java",
     *   line: 121
     * }
     * Constructed ID (generateLineCodeLink from Utils.ts): 1Example.java121
     * When a line is clicked it uses this link id
     * to scroll into vie the linked line in the linked file of the other submission.
     * Key is line number, value is id of linked line.
     * @type {Ref<UnwrapRef<{}>>}
     */
    const linksArray: Ref<
      Array<
        | {
            panel: number;
            file: string;
            line: number;
          }
        | string
      >
    > = ref([]);
    /**
     * Indicates whether the line is last line of match. Key is line number, value is true or false.
     * @type {Ref<UnwrapRef<{}>>}
     */
    const isLast: Ref<Array<boolean>> = ref([]);
    /**
     * Indicates whether the line is the first line of a match. Key is line number, value is true or false.
     * @type {Ref<UnwrapRef<{}>>}
     */
    const isFirst: Ref<Array<boolean>> = ref([]);

    /**
     * Initializing the the upper arrays.
     */
    props.matches.forEach((m) => {
      for (let i = m.start; i <= m.end; i++) {
        //assign match color to line
        coloringArray.value[i] = m.color;
        //assign link object to line.
        linksArray.value[i] = {
          panel: m.linked_panel,
          file: m.linked_file,
          line: m.linked_line,
        };
      }
      isFirst.value[m.start] = true;
      isLast.value[m.end] = true;
    });
    //assign default values for all line which are not contained in matches
    for (let i = 0; i < props.lines.length; i++) {
      if (!coloringArray.value[i]) {
        coloringArray.value[i] = "#FFFFFF";
        linksArray.value[i] = "-1";
        isFirst.value[i] = false;
        isLast.value[i] = false;
      }
    }
    const emitLineClicked = (index: number) => {
      if (typeof linksArray.value[index] === "string") {
        return;
      } else {
        emit(
          "lineSelected",
          linksArray.value[index].panel,
          linksArray.value[index].file,
          linksArray.value[index].line
        );
      }
    };

    return {
      coloringArray,
      linksArray,
      isFirst,
      isLast,
      isEmpty,
      emitLineClicked,
    };
  },
});
</script>

<style scoped>
.code-panel-container {
  display: flex;
  flex-direction: column;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 3%;
  border-radius: 10px;
  box-shadow: var(--shadow-color) 2px 3px 3px;
  background: var(--primary-color-light);
}

.file-title {
  display: flex;
}

.file-title > p {
  text-align: center;
  color: var(--on-primary-color);
  font-weight: bold;
  font-size: large;
}

.code-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1%;
  padding: 1%;
  background: var(--background-color);
  box-shadow: inset var(--shadow-color) 0 0 3px 1px;
  overflow: auto;
}

.collapse-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
}

.collapse-button:hover {
  background: var(--primary-color-dark);
  border-radius: 10px;
}

.hidden {
  display: none !important;
}
</style>
