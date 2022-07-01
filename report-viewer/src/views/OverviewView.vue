<!--
  A view displaying the overview file of a JPlag report.
-->
<template>
  <div class="container">
    <div class="column-container" style="width: 25%">
      <div class="column-header-row">
        <h1>JPlag Report</h1>
      </div>
      <span class="section-title">Main Info:</span>
      <div id="basicInfo">
        <TextInformation
          :has-additional-info="hasMoreSubmissionPaths"
          :value="submissionPathValue"
          additional-info-title=""
          label="Directory path"
        >
          <p
            v-for="path in overview.submissionFolderPath"
            :key="path"
            :title="path"
          >
            {{ path }}
          </p>
        </TextInformation>
        <TextInformation
          :has-additional-info="true"
          :value="overview.language"
          additional-info-title="File extensions:"
          label="Language"
        >
          <p v-for="info in overview.fileExtensions" :key="info">{{ info }}</p>
        </TextInformation>
        <TextInformation
          :value="overview.matchSensitivity"
          label="Match Sensitivity"
        />
        <TextInformation
          :has-additional-info="true"
          :value="overview.submissionIds.length"
          additional-info-title="Submission IDs:"
          label="Submissions"
        >
          <IDsList :ids="overview.submissionIds" @id-sent="handleId" />
        </TextInformation>
        <TextInformation
          :value="overview.dateOfExecution"
          label="Date of execution"
        />
        <TextInformation
          :value="overview.durationOfExecution"
          label="Duration (in ms)"
        />
      </div>
      <div id="logo-section">
        <img id="logo" alt="JPlag" src="@/assets/logo-nobg.png" style="width: 40%;" />
      </div>
    </div>

    <div class="column-container" style="width: 35%">
      <div class="column-header-row">
        <div id="metrics">
          <h1>Metric:</h1>
          <div id="metrics-list">
            <MetricButton
              v-for="(metric, index) in overview.metrics"
              :id="metric.metricName"
              :key="metric.metricName"
              :is-selected="selectedMetric[index]"
              :metric="metric"
              @click="selectMetric(index)"
            />
          </div>
        </div>
      </div>
      <span class="section-title">Distribution:</span>
      <DistributionDiagram
        :distribution="distributions[selectedMetricIndex]"
        class="full-width"
      />
    </div>
    <div class="column-container" style="width: 35%">
      <div class="column-header-row">
        <h1>Top Comparisons:</h1>
      </div>
      <ComparisonsTable
        :clusters="overview.clusters"
        :top-comparisons="topComps[selectedMetricIndex]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import router from "@/router";
import TextInformation from "../components/TextInformation.vue";
import DistributionDiagram from "@/components/DistributionDiagram.vue";
import MetricButton from "@/components/MetricButton.vue";
import ComparisonsTable from "@/components/ComparisonsTable.vue";
import { OverviewFactory } from "@/model/factories/OverviewFactory";
import IDsList from "@/components/IDsList.vue";
import { useStore } from "vuex";
import { Overview } from "@/model/Overview";
import { ComparisonListElement } from "@/model/ComparisonListElement";

export default defineComponent({
  name: "OverviewView",
  components: {
    IDsList,
    ComparisonsTable,
    DistributionDiagram,
    MetricButton,
    TextInformation,
  },
  setup() {
    const store = useStore();
    const overviewFile = computed(() => {
      const index = Object.keys(store.state.files).filter((name) =>
        name.endsWith("overview.json")
      )[0];
      return store.state.files[index];
    });

    const getOverview = (): Overview => {
      let temp!: Overview;
      //Gets the overview file based on the used mode (zip, local, single).
      if (store.state.local) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          temp = OverviewFactory.getOverview(require("../files/overview.json"));
        } catch (e) {
          router.back();
        }
      } else if (store.state.zip) {
        const overviewJson = JSON.parse(overviewFile.value);
        temp = OverviewFactory.getOverview(overviewJson);
      } else if (store.state.single) {
        temp = OverviewFactory.getOverview(JSON.parse(store.state.fileString));
      }
      return temp;
    };

    let overview = getOverview();

    /**
     * Handles the selection of an Id to anonymize.
     * If all submission ids are provided as parameter it hides or displays them based on their previous state.
     * If a single id is provided it hides all of the other ids except for the chosen one.
     * @param id
     */
    const handleId = (id: string) => {
      if (id.length === overview.submissionIds.length) {
        if (store.state.anonymous.size > 0) {
          store.commit("resetAnonymous");
        } else {
          store.commit("addAnonymous", id);
        }
      } else {
        if (store.state.anonymous.has(id[0])) {
          store.commit("removeAnonymous", id);
        } else {
          if (store.state.anonymous.size === 0) {
            store.commit(
              "addAnonymous",
              overview.submissionIds.filter((s) => s !== id[0])
            );
          } else {
            store.commit("addAnonymous", id);
          }
        }
      }
    };

    //Metrics
    /**
     * Current metric to display distribution and comparisons for.
     * @type {Ref<UnwrapRef<boolean[]>>}
     */
    let selectedMetric = ref(overview.metrics.map(() => false));
    /**
     * Index of current selected metric. Used to obtain information for the metric from the distribution and top
     * comparisons array.
     * @type {Ref<UnwrapRef<number>>}
     */
    let selectedMetricIndex = ref(0);
    selectedMetric.value[0] = true;

    const selectMetric = (metric: number) => {
      selectedMetric.value = selectedMetric.value.map(() => {
        return false;
      });
      selectedMetric.value[metric] = true;
      selectedMetricIndex.value = metric;
    };

    //Distribution
    let distributions = ref(overview.metrics.map((m) => m.distribution));

    //Top Comparisons
    let topComps: Ref<Array<Array<ComparisonListElement>>> = ref(
      overview.metrics.map((m) => m.comparisons)
    );

    const hasMoreSubmissionPaths = overview.submissionFolderPath.length > 1;
    const submissionPathValue = hasMoreSubmissionPaths
      ? "Click arrow to see all paths"
      : overview.submissionFolderPath[0];

    return {
      overview,
      selectedMetricIndex,
      selectedMetric,
      distributions,
      topComps,
      hasMoreSubmissionPaths,
      submissionPathValue,
      handleId,
      selectMetric,
      store,
    };
  },
});
</script>

<style scoped>
h1 {
  text-align: left;
  margin-top: 2%;
  color: var(--on-background-color);
}

hr {
  border: 0;
  height: 2px;
  background: linear-gradient(to right, #edf2fb, transparent, transparent);
  width: 100%;
  box-shadow: #d7e3fc 0 1px;
}
.column-header-row {
  height: 10vh;
  margin-top: 5px;
  margin-bottom: 5px;
}

.container {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100vh;
  margin: 0;
  overflow: auto;
  background: var(--background-color);
}

.column-container {
  display: flex;
  flex-direction: column;
  padding: 1%;
}

.full-width {
  width: 100%;
}

.section-title {
  font-size: x-large;
  font-weight: bold;
  text-align: start;
  margin: 0;
  padding: 0;
  color: var(--on-background-color);
}

#basicInfo {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 3%;
  margin-top: 1%;
  background: var(--primary-color-light);
  border-radius: 10px;
  box-shadow: var(--shadow-color) 2px 3px 3px;
}

#metrics {
  display: flex;
  justify-content: start;
  margin-bottom: 1%;
}

#metrics-list {
  display: flex;
  margin-left: 2%;
}

#logo-section {
  justify-content: center;
  align-items: center;
  padding: 5%;
  display: flex;
}

#logo {
  flex-shrink: 2;
}
</style>
