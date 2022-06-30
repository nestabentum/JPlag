package de.jplag.reporting.reportobject.mapper;

import de.jplag.JPlagComparison;
import de.jplag.JPlagResult;
import de.jplag.Messages;
import de.jplag.options.SimilarityMetric;
import de.jplag.reporting.reportobject.model.Metric;
import de.jplag.reporting.reportobject.model.TopComparison;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Extracts and maps metrics from the JPlagResult to the corresponding JSON DTO
 */
public class MetricMapper {
    public Metric getAverageMetric(JPlagResult result) {
        return new Metric(SimilarityMetric.AVG.name(),
                intArrayToList(result.getSimilarityDistribution()), getTopComparisons(result.getComparisons()),
                Messages.getString("SimilarityMetric.Avg.Description"));
    }
    public Metric getMaxMetric(JPlagResult result) {
        return new Metric(SimilarityMetric.MAX.name(),  intArrayToList(result.getMaxSimilarityDistribution()),
                getMaxSimilarityTopComparisons(result.getComparisons()), Messages.getString("SimilarityMetric.Max.Description"));
    }
    private static List<Integer> intArrayToList(int[] array) {
        return Arrays.stream(array).boxed().collect(Collectors.toList());
    }
    private static List<TopComparison> getTopComparisons(List<JPlagComparison> comparisons, Function<JPlagComparison, Float> similarityExtractor) {
        List<TopComparison> topComparisons = new ArrayList<>();
        comparisons.forEach(comparison -> topComparisons.add(new TopComparison(comparison.getFirstSubmission().getName(),
                comparison.getSecondSubmission().getName(), similarityExtractor.apply(comparison))));
        return topComparisons;
    }
    /**
     * Converts JPlagComparison to a DTO for displaying only comparisons. See
     * {@link de.jplag.reporting.reportobject.ReportObjectFactory#generateComparisonReports(JPlagResult)} for a more detailed representation of a comparison.
     * @return List containing TopComparison DTOs.
     */
    private static List<TopComparison> getTopComparisons(List<JPlagComparison> comparisons) {
        return getTopComparisons(comparisons, JPlagComparison::similarity);
    }
    private static List<TopComparison> getMaxSimilarityTopComparisons(List<JPlagComparison> comparisons) {
        return getTopComparisons(comparisons, JPlagComparison::maximalSimilarity);
    }


}
