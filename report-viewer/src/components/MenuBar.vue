<template>
  <div class="menubar">
    <button @click="navigateHome" style="icon">
      <font-awesome-icon :icon="['fas', 'house']" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MenuBar",
  setup() {
    const router = useRouter();
    const navigateHome = () => {
      router.push({
        name: "FileUploadView",
      });
    };

    return { navigateHome };
  },
});
</script>
<style>
.menubar {
  display: flex;
  flex-direction: row-reverse;
  padding: 5px;
  margin-bottom: 10px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  right: 0;
  background-color: transparent;
}
</style>
